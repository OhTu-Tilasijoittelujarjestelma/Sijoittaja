import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build/dist"));
}

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

export default app;
