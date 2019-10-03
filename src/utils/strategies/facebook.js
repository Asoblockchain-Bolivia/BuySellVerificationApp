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
      callbackURL: callback_url
    },
    function(accessToken, refreshToken, profile, done) {
      const request = require("request-promise");

      const options = {
        method: "GET",
        uri: `https://graph.facebook.com/${profile.id}/feed`,
        qs: {
          access_token: accessToken
        }
      };

      request(options).then(fbRes => {
        console.log("posts facebook", fbRes);

        return done(
          { "accessToken:": accessToken, "refreshToken:": refreshToken },
          profile
        );
      });
    }
  )
);
