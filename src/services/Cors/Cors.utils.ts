/**
 * Checks if the origin is allowed
 */
const isAllowedOrigin = (origin: string | undefined, whitelist: string[]) => {
  if (process.env.NODE_ENV === "development" && !origin) return false;

  return whitelist.indexOf(origin!) !== -1;
};

/**
 * Handles getting the cors options
 */
const getCorsOptions = () => {
  const options = {
    origin: false,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Origin", "Content-Type", "Accept", "Authorization"],
  };

  return options;
};

/**
 * Exports the utils
 */
export const utils = {
  isAllowedOrigin,
  getCorsOptions,
};
