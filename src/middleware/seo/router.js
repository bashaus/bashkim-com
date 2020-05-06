const express = require('express');

const movedPermanentlySchema = require('./schema/301-moved-permanently.json');
const goneSchema = require('./schema/410-gone.json');

const server = express();

// 301 Moved Permanently
movedPermanentlySchema.forEach((entry) => {
  server.get(entry.src, (req, res, next) => {
    res.redirect(301, entry.dest);
  });
});

// 410 Gone
goneSchema.forEach((entry) => {
  server.get(entry.src, (req, res, next) => {
    res.sendStatus(410);
  });
});

// Strip trailing slashes
server.get(/.+\/$/, (req, res, next) => {
  const path = req.path.slice(0, -1);
  const query = req.url.slice(req.path.length);
  res.redirect(301, `${path}${query}`);
});

module.exports = server;
