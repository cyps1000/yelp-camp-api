import { Request, Response, RequestHandler } from "express";

/**
 * Imports middlewares
 */
import {
  requireAuth,
  validateRequest,
  currentUser,
} from "../../../middlewares";

/**
 * Imports models
 */
import { Campground } from "../../../models";

/**
 * Imports validations
 */
import { requestValidations } from "./UpdateCampground.validation";

/**
 * Handles updating a campground
 */
const updateCampground = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, image, description } = req.body;

  try {
    /**
     * Checks if campground exists
     */
    const campground = await Campground.findById(id);

    if (!campground)
      return res.status(404).send({ msg: "Campground not found" });

    /**
     * Checks to see if the user is the author
     */
    if (campground.author.id.toString() !== req.currentUser!.id)
      return res.status(401).json({ msg: "Not authorized" });

    /**
     * Makes sure the campground name is unique
     */
    const campgroundName = await Campground.findOne({ name });

    if (campgroundName)
      return res.status(401).send({ errors: [{ msg: "Name already taken" }] });

    /**
     * Handles updaing the data
     */
    campground.name = name;
    campground.description = description;
    campground.image = image;

    await campground.save();
    res.status(202).send(campground);
  } catch (error) {}
};

/**
 * Defines the controller
 */
export const UpdateCampgroundController: RequestHandler[] = [
  requireAuth,
  currentUser,
  validateRequest,
  ...requestValidations,
  updateCampground,
];
