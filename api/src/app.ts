import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import errMiddleware from "./middlewares/error";
import notFoundMiddleware from "./middlewares/not-found";
import { productRouter } from "./routes/products";

const app = express();

app.use(helmet());

app.use(cors());

app.use(morgan("dev"));

app.use(compression());

app.use(bodyParser.json());

app.use("/products", productRouter);

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use(notFoundMiddleware);

app.use(errMiddleware);

export default app;
