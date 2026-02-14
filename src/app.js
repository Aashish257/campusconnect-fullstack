import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// health check route
app.use("/api/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "CampusConnect backend is running"
  });
});

export default app;