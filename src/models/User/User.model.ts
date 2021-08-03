import mongoose from "mongoose";

/**
 * Imports services
 */
import { PasswordManager } from "../../services";

/**
 * Imports types
 */
import { UserAttributes, UserDocument, UserModel } from "./User.types";

/**
 * Builds the schema
 */
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    alias: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      versionKey: false,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
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
 * Pre-save hook
 */
userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await PasswordManager.hash(this.get("password"));
    this.set("password", hashed);
  }

  done();
});

/**
 * Adds a static method on the model which is used to create a new docment
 */
userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};

/**
 * Defines the model
 */
export const User = mongoose.model<UserDocument, UserModel>("User", userSchema);
