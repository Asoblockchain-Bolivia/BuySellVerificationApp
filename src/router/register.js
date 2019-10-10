const express = require("express");
const Router = express.Router();
const Register = require("../services/register");

Router.post("/", function(req, res, next) {
  Register.post(req, res, next);
});

module.exports = Router;
