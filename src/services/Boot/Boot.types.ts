import { UserDocument } from "../../models";

/**
 * Defines the token interface
 */
export interface Token {
  id: string;
  iat: number;
  exp: number;
}

/**
 * Expands global
 */
declare global {
  /**
   * Expands the Express namespace
   */
  namespace Express {
    /**
     * Expands the request interface
     */
    interface Request {
      token?: Token;
      currentUser?: UserDocument | null;
    }
  }

  /**
   * Expands the NodeJS namespace
   */
  namespace NodeJS {
    /**
     * Expands the Process env interface
     */
    interface ProcessEnv {
      /**
       * General
       */
      NODE_ENV: "development" | "production" | "test";
      PORT: string;

      /**
       * Database connection
       */
      MONGO_URI: string;

      /**
       * Authentication
       */
      JWT_KEY: string;
    }
  }
}
