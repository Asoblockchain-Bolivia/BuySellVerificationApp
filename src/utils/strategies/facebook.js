const passport = require("passport"),
  FacebookStrategy = require("passport-facebook").Strategy;

const callback_url =
  process.env.ENV == "production"
    ? process.env.FACEBOOK_CALLBACK_PROD
    : process.env.FACEBOOK_CALLBACK_DEV;

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_API_KEY,
      clientSecret: process.env.FACEBOOK_API_SECRET,
      callbackURL: process.env.FACEBOOK_API_CALLBACK
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        return done(null, profile);
      });
    }
  )
);
