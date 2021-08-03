import mongoose from "mongoose";

/**
 * Imports types
 */
import {
  CommentAttributes,
  CommentDocument,
  CommentModel,
} from "./Comment.types";

/**
 * Builds the schema
 */
const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      username: String,
    },
  },
  {
    toJSON: {
      versionKey: false,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    timestamps: {
      currentTime: () =>
        new Date().setMinutes(
          new Date().getMinutes() + new Date().getTimezoneOffset() * -1
        ),
    },
  }
);

/**
 * Adds a static method on the model which is used to create a new docment
 */
CommentSchema.statics.build = (attributes: CommentAttributes) => {
  return new Comment(attributes);
};

/**
 * Defines the model
 */
export const Comment = mongoose.model<CommentDocument, CommentModel>(
  "Comment",
  CommentSchema
);
