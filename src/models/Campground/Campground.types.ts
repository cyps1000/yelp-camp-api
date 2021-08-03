import mongoose from "mongoose";

/**
 * An interface that describes the properties
 * that are required to create a new document
 */
export interface CampgroundAttributes {
  name: string;
  image: string;
  description: string;
  author: {
    id: string;
    alias: string;
  };
}

/**
 * An interface that describes the properties
 * that a document has
 */
export interface CampgroundDocument extends mongoose.Document {
  name: string;
  image: string;
  description: string;
  author: {
    id: string;
    alias: string;
  };
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * An interface that describes the properties
 * that a model has
 */
export interface CampgroundModel extends mongoose.Model<CampgroundDocument> {
  build(attributes: CampgroundAttributes): CampgroundDocument;
}
