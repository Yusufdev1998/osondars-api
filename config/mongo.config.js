import mongoose from "mongoose";

export async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO connected");
  } catch (error) {
    console.log("Failed to connect mongoDB: " + error.message);
  }
}
