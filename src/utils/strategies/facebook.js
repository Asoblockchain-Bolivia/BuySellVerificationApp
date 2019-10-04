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
      return await getPosts(
        process.env.DAYS_ANTIQUITY,
        profile,
        accessToken,
        done
      );
    }
  )
);

function getPosts(daysAgo, profile, accessToken, done) {
  return new Promise((res, rej) => {
    try {
      const request = require("request-promise");
      const timeAgo = new Date(
        Date.now() - daysAgo * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-US");
      console.log("HACE UN AÑO:", timeAgo);

      const options = {
        method: "GET",
        uri: `https://graph.facebook.com/${profile.id}/feed`,
        qs: {
          access_token: accessToken,
          until: timeAgo
        }
      };

      request(options).then(fbRes => {
        console.log("posts facebook", JSON.parse(fbRes).data.length);
        console.log("posts facebook 2", JSON.parse(fbRes).data.size);

        res(done(null, profile));
      });
    } catch (error) {
      rej(erro);
    }
  });
}
