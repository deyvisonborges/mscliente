import * as express from 'express';

export default function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next: any
) {
  console.log(`${request.method} ${request.path}`);
  next();
}
