const express = require("express");
const cors = require("cors");
const app = express();
var Feed = require("rss-to-json");

app.use(cors());

app.get("/posts", function(req, res) {
  Feed.load("https://medium.com/feed/codeuino", function(err, rss) {
    res.send(rss);
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("app.listening on port 5000");
});
