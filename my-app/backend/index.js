require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const UserRoute = require("./routes/user.route");
const cors = require("cors");

const port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/uploaded"));
app.use(UserRoute);

const allowedOrigins = [
  "http://localhost:3000",
  "https://dungpos.netlify.app/",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return res.json({ status: "error", msg });
      }
      return callback(null, true);
    },
  })
);

app.get("/", function (req, res, next) {
  return res.send("Hello Nodejs");
});

app.listen(port, () => {
  console.log("Server is running... on port " + port);
});
