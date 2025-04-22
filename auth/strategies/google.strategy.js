import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

export function initGoogleAuth() {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "70605665873-4lf1grhjt8jf89cjdpjc7am4s6povrgp.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://127.0.0.1:8080/auth/google/callback",
        scope: ["profile", "email"],
      },
      function (accessToken, refreshToken, profile, cb) {
        cb(null, profile);
      }
    )
  );
}
