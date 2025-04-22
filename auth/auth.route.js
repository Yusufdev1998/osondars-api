import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { getOrInsertNewUser } from "../services/user.service.js";

const authRouter = express.Router();

authRouter.get("/github", passport.authenticate("github", { session: false }));
authRouter.get("/google", passport.authenticate("google", { session: false }));
authRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
    session: false,
  }),
  async (req, res) => {
    const email = req.user?.emails[0]?.value;
    const user = await getOrInsertNewUser(req.user);
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );
    res.redirect(`/?email=${email}&token=${token}`);
  }
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  async (req, res) => {
    const email = req.user?.emails[0]?.value;
    const user = await getOrInsertNewUser(req.user);
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );
    res.redirect(`/?email=${email}&token=${token}`);
  }
);

export default authRouter;
