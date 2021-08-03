/**
 * Imports middlewares
 */
import { body } from "express-validator";

/**
 * Defines the request validations
 */
export const requestValidations = [
  body("email").trim().isEmail().withMessage("Invalid Email"),

  body("alias").trim().notEmpty().withMessage("Alias is required"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .bail()

    .isLength({ min: 8 })
    .withMessage("Password must have a minimum of 8 characters")
    .bail()

    .isLength({ max: 20 })
    .withMessage("Password must have a maximum of 20 characters")
    .bail(),
];
