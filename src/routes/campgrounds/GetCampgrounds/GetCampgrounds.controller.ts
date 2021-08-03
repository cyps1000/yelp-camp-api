import { Request, Response, RequestHandler } from "express";

/**
 * Imports middlewares
 */
import { validateRequest } from "../../../middlewares";

/**
 * Imports models
 */
import { Campground } from "../../../models";

/**
 * Handles getting the campgrounds
 */
const getCampgrounds = async (req: Request, res: Response) => {
  try {
    /**
     * Handles fetching all campgrounds from db
     */
    const campgrounds = await Campground.find()
      .sort({ updatedAt: -1 })
      .populate("comments");

    if (campgrounds.length < 0)
      return res.status(404).send({ msg: "No campgrounds have been found" });

    res.send(campgrounds);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
export const GetCampgroundsController: RequestHandler[] = [
  validateRequest,
  getCampgrounds,
];
