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
 * Handles searching for a campground by name
 */
const searchCampground = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.query;

  const campground = await Campground.aggregate([
    {
      $search: {
        autocomplete: {
          query: `${name}`,
          path: "name",
          fuzzy: {
            maxEdits: 2,
          },
        },
      },
    },
  ]);

  res.send(campground);
};

/**
 * Defines the controller
 */
export const SearchCampgroundController: RequestHandler[] = [
  validateRequest,
  searchCampground,
];
