import express from "express";

/**
 * External Imports
 */
import compression from "compression";

/**
 * Imports types
 */
import { Express } from "express";

/**
 * Configures middlewares
 */
export const Config = async (Server: Express): Promise<void> => {
  /**
   * Handles compressing all responses
   */
  Server.use(compression());

  /**
   * Middlewares
   */
  Server.use(express.json());
  Server.use(express.urlencoded({ extended: true }));

  if (process.env.NODE_ENV !== "production") {
    Server.enable("trust proxy");
  }

  console.log("BootService loaded");
};
