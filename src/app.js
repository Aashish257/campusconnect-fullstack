import express from "express";
import cors from "cors";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// health check route

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "CampusConnect backend is running"
  });
});

export default app;