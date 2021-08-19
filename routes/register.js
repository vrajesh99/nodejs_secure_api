const express = require('express');
const Joi = require('joi');
const route = express.Router();
const { validationRegister } = require('../validation');
const User = require('../model/user');
const bcrypt = require('bcryptjs');

route.post('/register', async (req, res) => {
  try {
    const { error } = await validationRegister(req.body);
    if (error) return res.status(401).send(error.details[0].message);

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });

    const userInDb = await User.findOne({ email: req.body.email });
    if (userInDb) return res.status(401).send('user already exist!!!');

    const resultOnSave = await user.save();
    res.status(200).send(resultOnSave);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
