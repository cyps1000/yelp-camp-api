import dotenv from "dotenv";

/**
 * Makes the process env variables avaialable in the modules
 */
dotenv.config();

/**
 * Imports modules
 */
import { Config, CorsOptions, OriginChecker } from "./modules";

/**
 * Handles setting up cors
 */
export const CorsService = {
  /**
   * Handles applying cors to the server
   */
  config: Config,

  /**
   * Configures the cors options
   */
  getCorsOptions: CorsOptions,

  /**
   * Checks if the origin provided is whitelisted
   */
  checkOrigin: OriginChecker.check,
};
