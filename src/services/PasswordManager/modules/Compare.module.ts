/**
 * Imports utils
 */
import { utils } from "../PasswordManager.utils";

/**
 * Handles comparing the stored password with the supplied password
 */
export const Compare = async (
  storedPassword: string,
  suppliedPassword: string
) => {
  /**
   * Handles getting the password manager service utils
   */
  const { getKey, formatKey } = utils;

  const [hashedPassword, salt] = storedPassword.split(".");

  /**
   * Derive the secret key from the supplied password and the salt
   */
  const derivedKey = await getKey(suppliedPassword, salt);

  return formatKey(derivedKey) === hashedPassword;
};
