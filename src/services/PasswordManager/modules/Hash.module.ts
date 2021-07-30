/**
 * Imports utils
 */
import { utils } from "../PasswordManager.utils";

/**
 * Handles hashing the provided string
 */
export const Hash = async (password: string) => {
  /**
   * Handles getting the password manager service utils
   */
  const { generateSalt, getKey, formatKey } = utils;

  /**
   * Generates cryptographically strong pseudorandom data.
   */
  const salt = generateSalt();

  /**
   * Derive the secret key from the password and the salt
   */
  const derivedKey = await getKey(password, salt);

  return formatKey(derivedKey, salt);
};
