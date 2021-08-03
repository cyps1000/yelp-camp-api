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
import { Comment } from "../../../models";

/**
 * Imports validations
 */
import { requestValidations } from "./UpdateComment.validation";

/**
 * Handles updating a comment
 */
const updateComment = async (req: Request, res: Response) => {
  const { text } = req.body;
  const { id } = req.params;

  try {
    /**
     * Searches for the comment in the db
     */
    const comment = await Comment.findById(id);

    if (!comment) return res.status(404).send({ msg: "Comment not found" });

    /**
     * Checks to see if the user is the author
     */
    if (comment.author.id.toString() !== req.currentUser!.id)
      return res.status(401).send({ msg: "Not authorized" });

    /**
     * Handles updaing the data
     */
    comment.text = text;

    await comment.save();
    res.status(202).send(comment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
export const UpdateCommentController: RequestHandler[] = [
  requireAuth,
  currentUser,
  ...requestValidations,
  validateRequest,
  updateComment,
];
