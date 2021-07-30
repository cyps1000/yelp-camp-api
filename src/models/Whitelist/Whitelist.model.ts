import mongoose from "mongoose";

/**
 * Imports types
 */
import {
  WhitelistAttributes,
  WhitelistDocument,
  WhitelistModel
} from "./Whitelist.types";

/**
 * Builds the schema
 */
const whitelistSchema = new mongoose.Schema(
  {
    origin: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      currentTime: () =>
        new Date().setMinutes(
          new Date().getMinutes() + new Date().getTimezoneOffset() * -1
        )
    }
  }
);

/**
 * Adds a static method on the model which is used to create a new docment
 */
whitelistSchema.statics.build = (attributes: WhitelistAttributes) => {
  return new Whitelist(attributes);
};

/**
 * Defines the model
 */
const Whitelist = mongoose.model<WhitelistDocument, WhitelistModel>(
  "Whitelist",
  whitelistSchema
);

export { Whitelist };
