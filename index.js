const express = require("express");
const app = express();
const port = 80; // Listen on port 80 for HTTP requests

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
