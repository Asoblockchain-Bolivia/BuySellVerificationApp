const passport = require("passport");
require("dotenv").config();

class Register {
  facebook() {
    require("../utils/strategies/facebook");
    console.log("INGRESO AL SERVICE ENTRADA");

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
    )();
  }

  callback() {
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
    )();
  }
}

module.exports = new Register();
