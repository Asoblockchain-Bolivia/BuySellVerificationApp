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
        successRedirect: "/auth/allow_permission",
        failureRedirect: "/auth/reject_permission"
      },
      function(err, data) {
        if (err) {
          res.redirect("/error");
        }

        if (data.n_posts > 0) {
          res.redirect("/auth/valid_account");
        } else {
          res.redirect("/auth/invalid_account");
        }
      }
    )(req, res, next);
  }
}

module.exports = new Register();
