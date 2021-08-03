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
 * Imports validations
 */
import { requestValidations } from "./CreateComment.validation";

/**
 * Handles creating a new comment
 */
const createComment = async (req: Request, res: Response) => {
  const { campgroundId } = req.params;
  const { text } = req.body;

  try {
    /**
     * Checks to see if the campground exists
     */
    const campground = await Campground.findById(campgroundId);

    if (!campground)
      return res.status(404).send({ msg: "Campground not found" });

    /**
     * Handles building a new comment
     */
    const comment = Comment.build({
      text,
      author: { id: req.currentUser!.id, alias: req.currentUser!.alias },
    });

    await comment.save();

    campground.comments.push(comment.id);

    await campground.save();

    res.status(201).send(comment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
export const CreateCommentController: RequestHandler[] = [
  requireAuth,
  currentUser,
  ...requestValidations,
  validateRequest,
  createComment,
];
