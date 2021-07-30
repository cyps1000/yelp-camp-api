/**
 * Imports modules
 */
import { Database } from "./Database.module";
import { EnvChecker } from "./EnvChecker.module";
import { Listen } from "./Listen.module";

/**
 * Imports types
 */
import { Express } from "express";

/**
 * Handles starting the server
 */
export const Start = async (Server: Express) => {
  /**
   * Handles checking for missing env variables
   */
  EnvChecker.check();

  /**
   * Connects to the database
   * await Database.connect()
   */
  await Database.connect();

  /**
   * Starts the server
   */
  Listen(Server);
};
