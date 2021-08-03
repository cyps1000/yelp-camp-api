import express from "express";

/**
 * Imports Controllers
 */
import { RegisterController } from "./Register";
import { CurrentUserController } from "./CurrentUser";
import { LoginController } from "./Login";
import { RemoveUserController } from "./RemoveUser";

/**
 * Defines the router
 */
const router = express.Router();

/**
 * Register
 */
router.post("/auth/register", RegisterController);

/**
 * Login
 */
router.post("/auth/login", LoginController);

/**
 * Current User
 */
router.get("/auth/user", CurrentUserController);

/**
 * Remove User
 */
router.delete("/auth/user", RemoveUserController);

export { router as authRouter };
