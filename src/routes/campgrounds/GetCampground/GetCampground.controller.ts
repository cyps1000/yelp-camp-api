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
 * Handles getting a campground by id
 */
const getCampgroundById = async (req: Request, res: Response) => {
  const { id } = req.params;

  /**
   * Handles searching for the campground
   */
  const campground = await Campground.findById(id).populate("comments");

  if (!campground) return res.status(404).send({ msg: "Campground not found" });

  res.status(200).send(campground);
};

/**
 * Defines the controller
 */
export const GetCampgroundByIdController: RequestHandler[] = [
  validateRequest,
  getCampgroundById,
];
