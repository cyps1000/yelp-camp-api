import mongoose from "mongoose";

/**
 * Imports types
 */
import {
  CampgroundAttributes,
  CampgroundDocument,
  CampgroundModel,
} from "./Campground.types";

/**
 * Builds the schema
 */
const CampgroundSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      alias: String,
    },
    rating: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        stars: Number,
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
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
CampgroundSchema.statics.build = (attributes: CampgroundAttributes) => {
  return new Campground(attributes);
};

/**
 * Defines the model
 */
export const Campground = mongoose.model<CampgroundDocument, CampgroundModel>(
  "Campground",
  CampgroundSchema
);
