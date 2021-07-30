/**
 * Imports the server
 */
import { Server } from "./Server";

/**
 * Imports services
 */
import { BootService } from "./services";

/**
 * Starts the server
 */
BootService.start(Server);
