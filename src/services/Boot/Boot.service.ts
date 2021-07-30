import dotenv from "dotenv";

/**
 * Makes the process env variables avaialable in the modules
 */
dotenv.config();

/**
 * Imports modules
 */
import { Start, Database, EnvChecker, Config } from "./modules";

/**
 * Initializes the server and starts listening to requests
 */
export const BootService = {
  /**
   * Handles starting the server
   */
  start: Start,

  /**
   * Configures middlewares
   */
  config: Config,

  /**
   * Handles connecting to the database
   */
  connectToDatabase: Database.connect,

  /**
   * Handles checking if any vital env variables are missing.
   */
  checkEnvVariables: EnvChecker.check,
};
