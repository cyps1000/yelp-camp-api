/**
 * Imports middlewares
 */
import { body } from "express-validator";

/**
 * Defines the request validations
 */
export const requestValidations = [
  body("text")
    .trim()
    .notEmpty()
    .withMessage("Text is required")
    .bail()

    .isLength({ min: 3 })
    .withMessage("Your comment must have at least 3 characters")
    .bail()

    .isLength({ max: 256 })
    .withMessage("Your comment exceeds the limit of 256 characters")
    .bail(),
];
