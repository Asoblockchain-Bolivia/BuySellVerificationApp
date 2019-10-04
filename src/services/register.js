const passport = require("passport");
require("dotenv").config();

class Register {
  facebook(req, res, next) {
    require("../utils/strategies/facebook");
    passport.authenticate(
      "facebook",
      {
        scope: "email,public_profile, user_posts"
      },
      function(err, data) {
        if (err) {
          console.log("ERROR primer SERVICE");
        }
        console.log("entrada primer SERVICE: ", data);
      }
    )(req, res, next);
  }

  callback(req, res, next) {
    require("../utils/strategies/facebook");

    console.log("INGRESO AL SERVICE CALLBACK");

    passport.authenticate(
      "facebook",
      {
        successRedirect: "/exito",
        failureRedirect: "/falla"
      },
      function(err, data) {
        if (err) {
          console.log("ERROR callback SERVICE");
        }
        console.log("entrada callback SERVICE: ", data);

        //res.redirect("/dashboard");
      }
    )(req, res, next);
  }
}

module.exports = new Register();
