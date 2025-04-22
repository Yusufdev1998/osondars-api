import { userModel } from "../models/users.model.js";

export async function getOrInsertNewUser(profile) {
  const user = await userModel.findOne({
    email: profile.emails[0]?.value,
  });

  if (user) return user;

  return userModel.insertOne({
    email: profile.emails[0]?.value,
    username: profile.username,
    first_name: profile.name?.givenName,
    last_name: profile.name?.familyName,
    role: "student",
    avatar_url: profile.photos[0]?.value,
  });
}
