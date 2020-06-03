const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db");
const Users = require("./models/user_schema");
const bcrypt = require("bcrypt");
const jwt = require("./jwt");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async function (req, res, next) {
  res.send("Hello Nodejs");
});

app.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    console.log(1);

    await Users.create(req.body);
    console.log(2);

    res.json({ result: "success", message: "Register successfully" });
  } catch (err) {
    console.log(err + "");
    res.json({ result: "error", message: err.errmsg });
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  let doc = await Users.findOne({ username: req.body.username });
  console.log(doc);
  if (doc) {
    if (bcrypt.compareSync(req.body.password, doc.password)) {
      console.log(1);
      const payload = {
        id: doc._id,
        level: doc.level,
        username: doc.username,
      };

      const token = jwt.sign(payload);
      console.log(token);

      res.json({ result: "success", token, message: "Login successfully" });
    } else {
      // Invalid password
      res.json({ result: "error", message: "Invalid password" });
    }
  } else {
    // Invalid username
    res.json({ result: "error", message: "Invalid username" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log("Server is running... on port " + port);
});
