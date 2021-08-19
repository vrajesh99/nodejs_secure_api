const Joi = require('joi');
const express = require('express');

const validationRegister = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate({
    name: data.name,
    email: data.email,
    password: data.password,
  });
};

const validationlogin = function (data) {
  const schema = Joi.object({
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate({
    email: data.email,
    password: data.password,
  });
};
module.exports.validationlogin = validationlogin;
module.exports.validationRegister = validationRegister;
