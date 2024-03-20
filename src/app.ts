import express from "express";
import bodyParser from "body-parser";

import { router } from "./routes/routes";
import { errorHandler, handle404 } from "./services/error_handler";
import serverStatus from "express-now";

export const app = express();

app.use("/health", serverStatus(app));

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1", router);

app.use(errorHandler);
app.use(handle404);
