import express from "express";
import inventarioRoutes from "./routes/inventario.routes.js";

const app = express();

app.use(express.json());

app.use("/api", inventarioRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
