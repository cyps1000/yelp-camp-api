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
 * Handles removing a campground
 */
const removeCampground = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    /**
     * Handles checking if the campground exists
     */
    const campground = await Campground.findById(id);

    if (!campground)
      return res.status(404).send({ msg: "Campground not found" });

    /**
     * Checks to see if the user is the author
     */
    if (campground.author.id.toString() !== req.currentUser!.id)
      return res.status(401).json({ msg: "Not authorized" });

    await campground.remove();
    res.status(200).send({ msg: "Campground removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
export const RemoveCampgroundController: RequestHandler[] = [
  requireAuth,
  currentUser,
  validateRequest,
  removeCampground,
];
