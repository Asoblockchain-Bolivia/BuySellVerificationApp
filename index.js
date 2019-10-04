const app = require("express")();
require("dotenv").config();
const RegisterRouter = require("./src/router/register");

app.get("/", (req, res) => {
  res.json({
    url: "HOME",
    content: req.body,
    params: req.params,
    query: req.query
  });
});
app.use("/auth", RegisterRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running in: http://localhost:${server.address().port}`);
});
