const passport = require("passport");
require("dotenv").config();
require("../utils/strategies/facebook");

class Register {
  facebook(req, res, next) {
    passport.authenticate("facebook", {
      scope: ["public_profile", "email", "user_posts"]
    })(req, res, next);
  }

  callback(req, res, next) {
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
        //console.log("entrada callback SERVICE: ", data);

        res.redirect("/");
      }
    )(req, res, next);
  }
}

module.exports = new Register();
