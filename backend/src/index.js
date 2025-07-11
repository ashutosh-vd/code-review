import 'dotenv/config'

import express from "express"
import http from "http"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "*",
  credentials: true,
}));

import promptRoute from "./routes/prompt.route.js"
app.use("/api/prompt", promptRoute)

const server = http.createServer(app);

const config = {
	port : process.env.PORT
};

server.listen(config, () => {
  console.log("server is connected on "+ config.port);
})