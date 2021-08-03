import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";

/**
 * Defines the middleware
 */
export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  /**
   * Watches for invalid mongoose object id's and throws the error
   */
  if (req.params.id && !mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).send({ errors: [{ msg: "Invalid ID" }] });
  }

  next();
};
