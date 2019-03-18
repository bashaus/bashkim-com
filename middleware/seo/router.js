const express = require('express');
const Config = require('../../config');

const server = express();

// 301 Moved Permanently
Config.get('seo.301').forEach((entry) => {
  server.get(entry.src, (req, res, next) => {
    res.redirect(301, entry.dest);
  });
});

// 410 Gone
Config.get('seo.410').forEach((entry) => {
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
