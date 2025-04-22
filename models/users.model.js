import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: String,
  last_name: String,
  avatar_url: String,
  role: String, // "admin", "instructor", "student"
});

export const userModel = mongoose.model("users", userSchema);
