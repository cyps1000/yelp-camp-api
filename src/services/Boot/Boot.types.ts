import express from "express";

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
      token?: any;
      currentUser?: any | null;
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
