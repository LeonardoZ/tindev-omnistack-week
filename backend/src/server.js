const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const dotenv = require("dotenv");
const server = express();

// env variables
dotenv.config();

server.use(cors());
server.use(express.json());
server.use(routes);

mongoose.connect(process.env.MONGO_ATLAS_SRV, { useNewUrlParser: true });

server.listen(process.env.PORT);
