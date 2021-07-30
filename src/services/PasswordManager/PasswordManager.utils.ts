import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

/**
 * Promisifies the scrypt function
 */
const scryptAsync = promisify(scrypt);

/**
 * Generates cryptographically strong pseudorandom data.
 */
const generateSalt = () => randomBytes(16).toString("hex");

/**
 * Derives the secret key from the password and the salt
 */
const getKey = async (password: string, salt: string) => {
  return (await scryptAsync(password, salt, 64)) as Buffer;
};

/**
 * Handles formatting the derived key
 * @format "hexKey.salt"
 */
const formatKey = (key: Buffer, salt?: string) => {
  const hexKey = key.toString("hex");
  return salt ? `${hexKey}.${salt}` : hexKey;
};

/**
 * Defines the utils
 */
export const utils = {
  generateSalt,
  getKey,
  formatKey,
};
