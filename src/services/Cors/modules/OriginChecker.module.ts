/**
 * Imports Models
 */
import { Whitelist } from "../../../models";

/**
 * Imports utils
 */
import { utils } from "../Cors.utils";

/**
 * Checks if the origin provided is whitelisted
 */
export const OriginChecker = {
  check: async (origin: string | undefined) => {
    /**
     * Gets the utils
     */
    const { isAllowedOrigin } = utils;

    /**
     * Gets the whitelist
     */
    const collection = await Whitelist.find({});
    const whitelist = collection.map((item) => item.origin);

    return isAllowedOrigin(origin, whitelist);
  },
};
