const express = require('express');
const Joi = require('joi');
const route = express.Router();
const { validationlogin } = require('../validation');
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

route.post('/login', async (req, res) => {
  try {
    const { error } = await validationlogin(req.body);
    if (error) return res.status(401).send(error.details[0].message);

    const userInDb = await User.findOne({ email: req.body.email });
    if (!userInDb) return res.status(401).send('user doesnt  exist!!!');

    const checkLoginData = await bcrypt.compare(
      req.body.password,
      userInDb.password
    );
    if (checkLoginData === false) {
      res.status(401).send('invalid password');
    } else {
      const token = jwt.sign({ _id: userInDb._id }, process.env.TOKEN_STRING);
      res.status(200).setHeader('auth-token', token);
      res.send('loginnn');
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
