import mongoose from "mongoose";

/**
 * An interface that describes the properties
 * that are required to create a new document
 */
export interface CommentAttributes {
  text: string;
  author: {
    id: string;
    alias: string;
  };
}

/**
 * An interface that describes the properties
 * that a document has
 */
export interface CommentDocument extends mongoose.Document {
  text: string;
  author: {
    id: string;
    alias: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

/**
 * An interface that describes the properties
 * that a model has
 */
export interface CommentModel extends mongoose.Model<CommentDocument> {
  build(attributes: CommentAttributes): CommentDocument;
}
