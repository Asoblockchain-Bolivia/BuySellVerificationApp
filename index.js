const app = require("express")();
require("dotenv").config();
const RegisterRouter = require("./src/router/register");

app.get("/", (req, res) => {
  res.json({ "API FACEBOOK: ": process.env.FACEBOOK_API_KEY });
});
app.use("/auth", RegisterRouter);
app.get("/login", (req, res) => {
  res.send("Login page");
});
app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running in: http://localhost:${server.address().port}`);
});
