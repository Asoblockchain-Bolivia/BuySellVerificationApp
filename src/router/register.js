const Express = require("express");
const Router = Express.Router();
const Register = require("../services/register");
const passport = require("passport");
require("../utils/strategies/facebook");

Router.get("/facebook", function(req, res, next) {
  Register.facebook(req, res, next);
});

Router.get("/callback/facebook", function(req, res, next) {
  Register.callback(req, res, next);
});

Router.get("/reject_permission", (req, res) => {
  res.json({
    url: "RECHAZO LOS PERMISOS",
    bodyS: req.body,
    params: req.params,
    query: req.query
  });
});

Router.get("/allow_permission", (req, res) => {
  res.json({
    url: "ACEPTO LOS PERMISOS",
    bodyS: req.body,
    params: req.params,
    query: req.query
  });
});

Router.get("/valid_account", (req, res) => {
  res.send("Mostrar formulario pidiendo algunos datos adicionales");
});

Router.get("/invalid_account", (req, res) => {
  res.send("El usuario no es antiguo");
});

module.exports = Router;
