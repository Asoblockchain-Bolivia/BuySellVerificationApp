const app = require("express")();
require("dotenv").config();
const RegisterRouter = require("./src/router/register");

app.get("/", (req, res) => {
  res.json({
    url: "HOME",
    "body: ": req.body,
    "params: ": req.params,
    "query: ": req.query
  });
});
app.use("/auth", RegisterRouter);
app.get("/falla", (req, res) => {
  res.json({
    url: "RECHAZO",
    "body: ": req.body,
    "params: ": req.params,
    "query: ": req.query
  });
});
app.get("/exito", (req, res) => {
  res.json({
    url: "EXITO",
    "body: ": req.body,
    "params: ": req.params,
    "query: ": req.query
  });
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running in: http://localhost:${server.address().port}`);
});
