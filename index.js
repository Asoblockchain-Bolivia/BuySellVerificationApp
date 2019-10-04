const app = require("express")();
require("dotenv").config();
const RegisterRouter = require("./src/router/register");

app.get("/", (req, res) => {
  console.log(req);

  res.json({
    url: "HOME",
    content: req,
    params: req.params,
    query: req.query
  });
});
app.use("/auth", RegisterRouter);
app.get("/falla", (req, res) => {
  res.json({
    url: "RECHAZO",
    bodyS: req.body,
    params: req.params,
    query: req.query
  });
});
app.get("/exito", (req, res) => {
  res.json({
    url: "EXITO",
    bodyS: req.body,
    params: req.params,
    query: req.query
  });
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running in: http://localhost:${server.address().port}`);
});
