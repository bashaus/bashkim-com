const express = require('express');

const config = require('../../config');

const server = express();
const redirects = config.get('redirects.301');

Object.entries(redirects).forEach(([src, dest]) => {
  server.get(src, (req, res, next) => {
    res.redirect(301, dest);
  });
});

module.exports = server;
