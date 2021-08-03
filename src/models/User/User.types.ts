import mongoose from "mongoose";

/**
 * An interface that describes the properties
 * that are required to create a new document
 */
export interface UserAttributes {
  email: string;
  alias: string;
  password: string;
}

/**
 * An interface that describes the properties
 * that a document has
 */
export interface UserDocument extends mongoose.Document {
  email: string;
  alias: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * An interface that describes the properties
 * that a model has
 */
export interface UserModel extends mongoose.Model<UserDocument> {
  build(attributes: UserAttributes): UserDocument;
}
