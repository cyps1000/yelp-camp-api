/**
 * External Imports
 */
import { CorsOptionsDelegate } from "cors";

/**
 * Imports modules
 */
import { OriginChecker } from "./OriginChecker.module";

/**
 * Imports utils
 */
import { utils } from "../Cors.utils";

/**
 * Configures the cors options
 */
export const CorsOptions: CorsOptionsDelegate = async (req, callback) => {
  /**
   * Gets the utils
   */
  const { getCorsOptions } = utils;

  /**
   * Defines the cors options
   */
  const options = getCorsOptions();

  /**
   * Checks if the origin is allowed
   */
  const isAllowedOrigin = await OriginChecker.check(req.headers.origin);

  /**
   * Sets the origin option to true if the origin is allowed
   */
  if (isAllowedOrigin) options["origin"] = true;

  callback(null, options);
};
