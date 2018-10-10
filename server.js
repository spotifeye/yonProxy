require("newrelic");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
var compression = require("compression");

var server = express();
server.use(compression());
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "./"), { maxAge: "30 days" }));
server.use(cors());

// Albums & Player
// server.get("/api/v1/artists/:artistID", (req, res) => {
//   res.redirect("http://localhost:3004/api/v1/artists/" + req.params.artistID);
// });

// Related Artists
// server.get("/api/v1/artists/:artistID", (req, res) => {
//   res.redirect("http://18.206.245.56" + req.url);
// });

// Popular Songs
// server.get("/api/v1/artists/:artistID", (req, res) => {
//   res.redirect("http://18.224.17.253" + req.url);
// });

// Header
server.get("/api/v1/artists/:artistID", (req, res) => {
  console.log(req.url);
  res.redirect("http://18.218.64.3:3004" + req.url);
});

server.listen(3000, console.log("Listening on:", 3000));
