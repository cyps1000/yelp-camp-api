/**
 * Imports middlewares
 */
import { body } from "express-validator";

/**
 * Defines the request validations
 */
export const requestValidations = [
  body("email").trim().isEmail().withMessage("Invalid Email"),

  body("password").trim().notEmpty().withMessage("Password is required").bail(),
];
