import { Request, Response, RequestHandler } from "express";
import jwt from "jsonwebtoken";

/**
 * Imports middlewares
 */
import { validateRequest } from "../../../middlewares";

/**
 * Imports models
 */
import { User } from "../../../models";

/**
 * Imports validations
 */
import { requestValidations } from "./Register.validation";

/**
 * Handles registering a new user
 */
const registerUser = async (req: Request, res: Response) => {
  const { email, alias, password } = req.body;

  /**
   * Checks if the email exists
   */
  const emailExists = await User.findOne({ email });
  if (emailExists)
    return res.status(401).send({ errors: [{ msg: "Invalid email" }] });

  /**
   * Checks if the alias exists
   */
  const aliasExists = await User.findOne({ alias });
  if (aliasExists)
    return res.status(401).send({ errors: [{ msg: "Invalid alias" }] });

  /**
   * Creates the user
   */
  const user = User.build({ email, alias, password });
  await user.save();

  /**
   * Defines the payload
   */
  const payload = {
    id: user.id,
  };

  /**
   * Creates a token
   */
  const jwtToken = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: 7200 });

  res.status(201).send({ token: jwtToken });
};

/**
 * Defines the controller
 */
export const RegisterController: RequestHandler[] = [
  ...requestValidations,
  validateRequest,
  registerUser,
];
