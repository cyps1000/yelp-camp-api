import { Request, Response, RequestHandler } from "express";
import { requireAuth } from "../../../middlewares";

/**
 * Imports models
 */
import { User } from "../../../models";

/**
 * Handles geteting the current user
 */
const getCurrentUser = async (req: Request, res: Response) => {
  const { token } = req;

  /**
   * Checks if there's a token
   */
  if (!token) {
    return res.status(401).send({ msg: "Authorization denied" });
  }

  const user = await User.findById(token.id);
  if (user) return res.send(user);
};

/**
 * Defines the controller
 */
export const CurrentUserController: RequestHandler[] = [
  requireAuth,
  getCurrentUser,
];
