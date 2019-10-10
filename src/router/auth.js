const express = require("express");
const path = require("path");
const Router = express.Router();
const Register = require("../services/auth");

Router.get("/facebook", function(req, res, next) {
  Register.facebook(req, res, next);
});

Router.get("/callback/facebook", function(req, res, next) {
  Register.callback(req, res, next);
});

Router.get("/valid_account", (req, res) => {
  res.sendFile(path.join(__dirname + "/../../public/valid_account.html"));
});

Router.get("/invalid_account", (req, res) => {
  res.sendFile(path.join(__dirname + "/../../public/invalid_account.html"));
});

module.exports = Router;
