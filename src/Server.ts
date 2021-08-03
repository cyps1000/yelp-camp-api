import express from "express";

/**
 * Imports services
 */
import { SecurityService, CorsService, BootService } from "./services";

/**
 * Imports routes
 */
import { authRouter, campgroundRouter, commentRouter } from "./routes";

/**
 * Creates the express server
 */
const Server = express();

/**
 * Handles configuring middlewares
 */
BootService.config(Server);

/**
 * Sets up cors
 */
CorsService.config(Server);

/**
 * Configuress headers using helmet
 */
SecurityService.config(Server);

/**
 * Auth Router
 */
Server.use(authRouter);

/**
 * Campground Router
 */
Server.use(campgroundRouter);

/**
 * Comment Router
 */
Server.use(commentRouter);

export { Server };
