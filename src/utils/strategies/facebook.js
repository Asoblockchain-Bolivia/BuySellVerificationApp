const request = require("request-promise");
const passport = require("passport"),
  FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();

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
    async function(accessToken, refreshToken, profile, done) {
      console.log("HUASCAR: ", profile);

      try {
        const datos = await getPosts(
          process.env.DAYS_ANTIQUITY,
          profile,
          accessToken,
          done
        );
        return done(null, datos);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

function getPosts(daysAgo, profile, accessToken, done) {
  return new Promise((res, rej) => {
    try {
      const timeAgo = new Date(
        Date.now() - daysAgo * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-US");

      const options = {
        method: "GET",
        uri: `https://graph.facebook.com/${profile.id}/feed`,
        qs: {
          access_token: accessToken,
          until: timeAgo
        }
      };

      request(options).then(fbRes => {
        res({ profile: profile, n_posts: JSON.parse(fbRes).data.length });
      });
    } catch (error) {
      rej(erro);
    }
  });
}
