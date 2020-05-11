import express from "express";

import movedPermanentlySchema from "./schema/301-moved-permanently.json";
import goneSchema from "./schema/410-gone.json";

const server = express();

// 301 Moved Permanently
movedPermanentlySchema.forEach((entry) => {
  server.get(entry.src, (req: express.Request, res: express.Response) => {
    res.redirect(301, entry.dest);
  });
});

// 410 Gone
goneSchema.forEach((entry) => {
  server.get(entry.src, (req: express.Request, res: express.Response) => {
    res.sendStatus(410);
  });
});

// Strip trailing slashes
server.get(/.+\/$/, (req: express.Request, res: express.Response) => {
  const path = req.path.slice(0, -1);
  const query = req.url.slice(req.path.length);
  res.redirect(301, `${path}${query}`);
});

export default server;
