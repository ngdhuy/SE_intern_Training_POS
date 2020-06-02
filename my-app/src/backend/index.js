const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const UserRoute = require('./routes/user.route')
const cors = require("cors");

const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/uploaded"));
app.use(UserRoute)


app.get("/", function(req, res, next) {
  return res.send("Hello Nodejs");
});



app.listen(port, () => {
  console.log("Server is running... on port " + port);
});