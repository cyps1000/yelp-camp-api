import { Express } from "express";

/**
 * Gets the env variables
 */
const { PORT } = process.env;

/**
 * Listens to requests / Starts up the server.
 */
export const Listen = (Server: Express) => {
  Server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};
