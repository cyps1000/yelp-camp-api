import express from "express";

/**
 * Imports Controllers
 */
import { CreateCommentController } from "./CreateComment";
import { RemoveCommentController } from "./RemoveComment";
import { UpdateCommentController } from "./UpdateComment";

/**
 * Defines the router
 */
const router = express.Router();

/**
 * Create Comment
 */
router.post("/campgrounds/:campgroundId/comment", CreateCommentController);

/**
 * Update Comment
 */
router.put("/comment/:id", UpdateCommentController);

/**
 * Remove Comment
 */
router.delete(
  "/campgrounds/:campgroundId/comment/:commentId",
  RemoveCommentController
);

export { router as commentRouter };
