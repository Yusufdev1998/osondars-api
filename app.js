import express from "express";
import authRouter from "./auth/auth.route.js";

const app = express();

app.use("/auth", authRouter);

export default app;
