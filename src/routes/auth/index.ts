import express from "express";

/**
 * Imports Controllers
 */
import { RegisterController } from "./Register";
import { CurrentUserController } from "./CurrentUser";
import { loginController } from "./Login";

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
router.post("/auth/login", loginController);

/**
 * Current User
 */
router.get("/auth/user", CurrentUserController);

export { router as authRouter };
