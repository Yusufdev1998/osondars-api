import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: String,
  video_url: String,
  content: String,
});
const moduleSchema = new mongoose.Schema({
  title: String,
  lessons: [lessonSchema],
});
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
  categories: Array,
  price: Number,
  is_free: Boolean,
  modules: [moduleSchema],
});

export const courseModel = mongoose.model("courses", courseSchema);
