import cors from "cors";
import express from "express";
import roomsRouter from "./routes/roomsRouter";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/rooms", roomsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build/dist"));
}

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

export default app;
