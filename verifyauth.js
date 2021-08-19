const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.send('login first');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_STRING);
    console.log(verified);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('invalid token');
  }
};
