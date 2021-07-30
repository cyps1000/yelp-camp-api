import dotenv from "dotenv";

/**
 * Makes the process env variables avaialable in the modules
 */
dotenv.config();

/**
 * Imports modules
 */
import { Config, ContentSecurityPolicy } from "./modules";

/**
 * Defines the mailing service
 */
export const SecurityService = {
  /**
   * Configures headers using helmet
   * @see https://www.npmjs.com/package/helmet
   */
  config: Config,

  /**
   * Gets the content security policy
   */
  getContentSecurityPolicy: ContentSecurityPolicy,
};
