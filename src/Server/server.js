const express = require("express");
const cors = require("cors");

const server = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));
server.get('/upload');
server.post('/upload', function(req, res) {
  console.log("server"+req.files);
  res.send(req.files);
});

server.listen(8000, () => {
  console.log("Server started!");
});
