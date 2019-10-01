const passport = require("passport");
require("../utils/strategies/facebook");
require("dotenv").config();

class Register {
  facebook() {
    passport.authenticate("facebook", { scope: "email" });

    /*passport.authenticate("facebook", user => {
      console.log("Facebook service:", user);
      return user;
    });*/
  }

  callback() {
    passport.authenticate("facebook", {
      successRedirect: "/",
      failureRedirect: "/login"
    }),
      function(req, res) {
        res.redirect("/dashboard");
      };
  }
}

module.exports = new Register();
