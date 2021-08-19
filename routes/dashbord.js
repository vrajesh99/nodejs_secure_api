const express = require('express');
const route = express.Router();
const verificationOfToken = require('../verifyauth');

route.get('/dashboard', verificationOfToken, (req, res) => {
  res.json({
    name: 'sndsoadif',
  });
});

module.exports = route;
