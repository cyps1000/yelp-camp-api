import dotenv from "dotenv";

/**
 * Makes the process env variables avaialable in the modules
 */
dotenv.config();

/**
 * Imports modules
 */
import { Hash, Compare } from "./modules";

/**
 * Defines the mailing service
 */
export const PasswordManager = {
  /**
   * Handles hashing the provided string
   */
  hash: Hash,

  /**
   * Handles comparing the stored password with the supplied password
   */
  compare: Compare,
};
