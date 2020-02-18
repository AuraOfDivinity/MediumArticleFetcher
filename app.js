const express = require("express");
const cors = require("cors");
const app = express();
var Feed = require("rss-to-json");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/posts", function(req, res) {
  Feed.load("https://medium.com/feed/codeuino", function(err, rss) {
    res.send(rss);
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("app.listening on port 5000");
});
