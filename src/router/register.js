const Express = require("express");
const Router = Express.Router();
const Register = require("../services/register");
const passport = require("passport");
require("../utils/strategies/facebook");

Router.get("/facebook", passport.authenticate("facebook", { scope: "email" }));

Router.get(
  "/callback",
  passport.authenticate("facebook", { failureRedirect: "/falla" }),
  (req, res, next) => {
    console.log(req.body);
    res.send("devolucion");
  }
);

module.exports = Router;
