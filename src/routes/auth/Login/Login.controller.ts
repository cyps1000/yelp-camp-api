import { Request, Response, RequestHandler } from "express";
import jwt from "jsonwebtoken";

/**
 * Imports middlewares
 */
import { validateRequest } from "../../../middlewares";

/**
 * Imports Services
 */
import { PasswordManager } from "../../../services";

/**
 * Imports models
 */
import { User } from "../../../models";

/**
 * Imports validations
 */
import { requestValidations } from "./Login.validation";

/**
 * Handles authenticating the user
 */
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  /**
   * Checks if the user exists
   */
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).send({ errors: [{ msg: "Invalid credentials" }] });

  /**
   * Checks if the provided password is correct
   */
  const passwordsMatch = await PasswordManager.compare(user.password, password);

  if (!passwordsMatch) {
    return res.status(400).send({ errors: [{ msg: "Invalid credentials" }] });
  }

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

  res.status(202).send({ token: jwtToken });
};

/**
 * Defines the controller
 */
export const LoginController: RequestHandler[] = [
  ...requestValidations,
  validateRequest,
  loginUser,
];
