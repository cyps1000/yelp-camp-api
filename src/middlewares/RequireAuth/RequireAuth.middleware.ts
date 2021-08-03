import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { Token } from "../../services";

/**
 * Defines the middleware
 */
export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  /**
   * Checks if there's a token
   */
  if (!authorization)
    return res.status(401).send({ msg: "Authorization denied" });

  /**
   * Checks if there is a token
   */
  try {
    const token = jwt.verify(authorization, process.env.JWT_KEY) as Token;

    /**
     * Assigns the token on each request
     */
    req.token = token;
    return next();
  } catch (error) {
    res.status(401).send({ msg: "Token is not valid" });
  }
};
