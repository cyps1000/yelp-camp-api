import mongoose from "mongoose";

/**
 * An interface that describes the properties
 * that are required to create a new document
 */
export interface WhitelistAttributes {
  origin: string;
}

/**
 * An interface that describes the properties
 * that a document has
 */
export interface WhitelistDocument extends mongoose.Document {
  origin: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * An interface that describes the properties
 * that a model has
 */
export interface WhitelistModel extends mongoose.Model<WhitelistDocument> {
  build(attributes: WhitelistAttributes): WhitelistDocument;
}
