/**
 * Imports middlewares
 */
import { body } from "express-validator";

/**
 * Defines the request validations
 */
export const requestValidations = [
  body("name").trim().notEmpty().withMessage("Name is required"),

  body("description").trim().notEmpty().withMessage("Description is required"),

  body("image").trim().notEmpty().isURL().withMessage("Image is required"),
];
