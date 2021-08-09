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
import { requestValidations } from "./CreateCampground.validation";

/**
 * Handles creating a new campground
 */
const createCampground = async (req: Request, res: Response) => {
  const { name, image, description, location } = req.body;

  try {
    /**
     * Checks for existing campgrounds
     */
    const campground = await Campground.findOne({ name });

    if (campground)
      return res
        .status(401)
        .send({ errors: [{ msg: "Campground name already taken" }] });

    /**
     * Handles building a new campground
     */
    const newCampground = Campground.build({
      name,
      image,
      description,
      location,
      author: { id: req.currentUser!.id, alias: req.currentUser!.alias },
    });

    const createdCampground = await newCampground.save();

    res.status(201).send(createdCampground);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
export const CreateCampgroundController: RequestHandler[] = [
  requireAuth,
  currentUser,
  ...requestValidations,
  validateRequest,
  createCampground,
];
