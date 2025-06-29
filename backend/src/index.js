import 'dotenv/config'

import express from "express"
import http from "http"
import cors from "cors"

const app = express();

app.use(cors({
  origin: "*",
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send("Hello");
})

const server = http.createServer(app);

const config = {
	port : process.env.PORT
};

server.listen(config, () => {
  console.log("server is connected on "+ config.port);
})