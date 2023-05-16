const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();
route.use(reqFilter);

app.get("/", (req, res) => {
  res.send(`hey wu shang clan this side`);
});

app.get("/info", (req, res) => {
  res.send(`hey wu shan`);
});

route.get("/logo", (req, res) => {
  res.send(`hey wu shan`);
});

app.use("/", route);

app.listen(8080, () => {
  console.log("server is working on port 8080 ");
});
