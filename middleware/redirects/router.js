const querystring = require('querystring');
const express = require('express');

const config = require('../../config');

const server = express();
const redirects = config.get('redirects.301');

Object.entries(redirects).forEach(([src, dest]) => {
  server.get(src, (req, res, next) => {
    res.redirect(301, dest);
  });
});

// Strip trailing slashes
server.get(/.+\/$/, (req, res, next) => {
  const path = req.path.slice(0, -1);
  const query = req.url.slice(req.path.length);
  res.redirect(301, `${path}${query}`);
});

module.exports = server;
