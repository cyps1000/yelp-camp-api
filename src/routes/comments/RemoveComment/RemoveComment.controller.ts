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
import { Comment, Campground } from "../../../models";

/**
 * Handles removing a comment
 */
const removeComment = async (req: Request, res: Response) => {
  const { campgroundId, commentId } = req.params;

  try {
    /**
     * Checks to see if the campground exists
     */
    const campground = await Campground.findById(campgroundId);

    if (!campground)
      return res.status(404).send({ msg: "Campground not found" });

    /**
     * Check to see if comment exists
     */
    const comment = await Comment.findById(commentId);

    if (!comment) return res.status(404).send({ msg: "Comment not found" });

    /**
     * Checks to see if the user is the author
     */
    if (comment.author.id.toString() !== req.currentUser!.id)
      return res.status(401).send({ msg: "Not authorized" });

    /**
     * Handles deleting the comment
     */
    await comment.remove();

    /**
     * Get remove index
     */
    const removeIndex = campground.comments.indexOf(comment.id);

    campground.comments.splice(removeIndex, 1);
    await campground.save();

    res.status(200).send({ msg: "Comment removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
export const RemoveCommentController: RequestHandler[] = [
  requireAuth,
  currentUser,
  validateRequest,
  removeComment,
];
