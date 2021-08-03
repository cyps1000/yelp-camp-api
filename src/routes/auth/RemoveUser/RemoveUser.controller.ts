import { Request, Response, RequestHandler } from "express";
import { requireAuth, currentUser } from "../../../middlewares";

/**
 * Imports models
 */
import { User, Campground, Comment } from "../../../models";

/**
 * Handles removing a user along with the comments and campgrounds
 */
const removeUser = async (req: Request, res: Response) => {
  try {
    /**
     * Remove user campgrounds
     */
    await Campground.deleteMany({ user: req.currentUser!.id });

    /**
     * Remove user comments
     */
    await Comment.deleteMany({ user: req.currentUser!.id });

    /**
     * Remove user
     */
    const user = await User.findById(req.currentUser!.id);

    if (!user) return res.status(401).send({ msg: "Account not found" });

    await user.remove();

    res.send({ msg: "User deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
export const RemoveUserController: RequestHandler[] = [
  requireAuth,
  currentUser,
  removeUser,
];
