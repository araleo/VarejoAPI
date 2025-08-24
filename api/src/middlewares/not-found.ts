import { RequestHandler } from "express";

const notFoundMiddleware: RequestHandler = (_, res) => {
  res.status(404).json({});
  return;
};

export default notFoundMiddleware;
