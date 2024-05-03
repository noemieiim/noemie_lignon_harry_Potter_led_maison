import express from "express";
import router from "./routes/start.js";
import cors from "cors";

import bodyParser from "body-parser";

import ip from "ip";

const app = express();
const port = 3000;

let lastHouseVisited = "Grffondor";
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.get("/", (req, res) => {
  res.json({ message: lastHouseVisited });
});

app.post("/", (req, res) => {
  console.log(req.body);
  lastHouseVisited = req.body.house;
  res.json({ message: lastHouseVisited });
});

app.listen(3000, () => {
  console.log("Serveur run : http://" + ip.address() + ":3000");
});
