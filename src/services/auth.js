const passport = require("passport");
require("dotenv").config();
require("../utils/strategies/facebook");
const Firestore = require("../utils/config/firestore");

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
        successRedirect: "/auth/valid_account",
        failureRedirect: "/auth/invalid_account"
      },
      async function(err, data) {
        if (err) {
          res.redirect("/error");
        }
        const resp = await Firestore.create("traders", {
          social_network: "facebook",
          id: "lkj45df64gfg"
        });
        console.log("DATOS DEL USER ***: ", data.profile);
        console.log("ID de la BD", resp);

        if (data.n_posts > 0) {
          res.redirect(
            "/auth/valid_account?completename=juan perez&id=lkj45df64gfg"
          );
        } else {
          res.redirect("/auth/invalid_account");
        }
      }
    )(req, res, next);
  }
}

module.exports = new Register();
