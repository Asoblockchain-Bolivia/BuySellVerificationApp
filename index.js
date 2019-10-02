const app = require("express")();
require("dotenv").config();
const RegisterRouter = require("./src/router/register");

app.get("/", (req, res) => {
  res.json({ "API FACEBOOK: ": process.env.FACEBOOK_API_KEY });
});
app.use("/auth", RegisterRouter);
app.get("/falla", (req, res) => {
  res.send("Falla pagina");
});
app.get("/exito", (req, res) => {
  res.send("Exito pagina");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running in: http://localhost:${server.address().port}`);
});
