import { ErrorRequestHandler } from "express";

const errMiddleware: ErrorRequestHandler = (err, _, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    errors: [err.message ?? err],
  });
};

export default errMiddleware;
