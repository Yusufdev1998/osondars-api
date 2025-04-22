import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

export function initGithubAuth() {
  passport.use(
    new GitHubStrategy(
      {
        clientID: "Ov23liAtHqDdiWuurv93",
        clientSecret: "3f67a92cba4761e528c6a1ed3b2ff54d76a68519",
        callbackURL: "http://127.0.0.1:8080/auth/github/callback",
        scope: ["user:email"],
      },
      function (accessToken, refreshToken, profile, cb) {
        cb(null, profile);
      }
    )
  );
}
