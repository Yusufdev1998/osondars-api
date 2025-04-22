import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  student_id: String,
  course_id: String,
  price: Number,
  completions: Array,
  created_at: Date,
});

export const enrollmentModel = mongoose.model("enrollments", enrollmentSchema);
