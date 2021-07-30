/**
 * Defines the required keys
 */
const requiredKeys = ["MONGO_URI", "JWT_KEY"];

/**
 * Handles checking if any vital env variables are missing.
 */
export const EnvChecker = {
  check: () => {
    /**
     * Checks for the required keys
     */
    requiredKeys.forEach((key) => {
      if (!process.env[key]) {
        throw new Error(`${key} must be defined`);
      }
    });
  },
};
