const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api/music", (req, res) => {
  const term = req.query.term;
  const searchType = req.query.entity;
  const offset = req.query.offset;

  fetch(
    `https://itunes.apple.com/search?term=${term}&entity=${searchType}&limit=10&offset=${offset * 10}`
  )
    .then((res) => res.json())
    .then((json) => {
      res.send(json.results);
    })
    .catch(() => {
      res.status(404);
      res.send({ error: "No songs found" });
    });
});

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
