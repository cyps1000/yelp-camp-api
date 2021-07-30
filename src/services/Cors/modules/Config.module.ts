/**
 * External Imports
 */
import cors from "cors";

/**
 * Imports modules
 */
import { CorsOptions } from "./CorsOptions.module";

/**
 * Imports types
 */
import { Express } from "express";

/**
 * Handles applying cors to the server
 */
export const Config = (Server: Express) => {
  Server.use(cors(CorsOptions));
  console.log("CorsService loaded");
};
