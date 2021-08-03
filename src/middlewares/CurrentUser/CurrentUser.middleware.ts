import { Request, Response, NextFunction } from "express";

/**
 * Imports models
 */
import { User } from "../../models";

/**
 * Defines the middleware
 */
export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.token) return res.status(401).send({ msg: "Authorization denied" });
  /**
   * Handles getting the current user
   */
  const currentUser = await User.findById(req.token.id);

  req.currentUser = currentUser;
  return next();
};
