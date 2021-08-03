import express from "express";

/**
 * Imports Controllers
 */
import { CreateCampgroundController } from "./CreateCampground";
import { GetCampgroundByIdController } from "./GetCampground";
import { GetCampgroundsController } from "./GetCampgrounds";
import { RemoveCampgroundController } from "./RemoveCampground";
import { UpdateCampgroundController } from "./UpdateCampground";

/**
 * Defines the router
 */
const router = express.Router();

/**
 * Create Campground
 */
router.post("/campgrounds", CreateCampgroundController);

/**
 * Get Campground by id
 */
router.get("/campgrounds/:id", GetCampgroundByIdController);

/**
 * Get all campgrounds by date
 */
router.get("/campgrounds", GetCampgroundsController);

/**
 * Update campground
 */
router.put("/campgrounds/:id", UpdateCampgroundController);

/**
 * Remove campground
 */
router.delete("/campgrounds/:id", RemoveCampgroundController);

export { router as campgroundRouter };
