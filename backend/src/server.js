const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const connectedUsers = {};

io.on("connection", socket => {
  const { user } = socket.handshake.query;
  connectedUsers[user] = socket.id;
});

// env variables
dotenv.config();

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(
  cors({
    origin: true
  })
);
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGO_ATLAS_SRV, { useNewUrlParser: true });

server.listen(process.env.PORT);
