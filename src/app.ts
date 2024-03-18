import express from "express";
import { router } from "./routes/routes";
import { errorHandler, handle404 } from "./services/error_handler";

export const app = express();

app.use(express.json());
app.get("/", (req, res) =>
  res.send("Latest API is version 1, accessible at /api/v1")
);
app.use("/api/v1", router);

app.use(errorHandler);
app.use(handle404);
