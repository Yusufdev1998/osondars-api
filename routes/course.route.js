import express from "express";
import { courseModel } from "../models/course.model.js";

const courseRouter = express.Router();

courseRouter.get("/", async (req, res) => {
  const courses = await courseModel.find();
  res.send(courses);
});

courseRouter.post("/", async (req, res) => {
  const courseContent = req.body;
  const newCourse = await courseModel.insertOne(courseContent);
  res.send(newCourse);
});

export default courseRouter;

// File upload
