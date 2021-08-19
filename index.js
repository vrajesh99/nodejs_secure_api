const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routeRegisterPage = require('./routes/register');
const routeloginPage = require('./routes/login');
const routeDashboardPage = require('./routes/dashbord');

app.use('/api/user', routeRegisterPage);
app.use('/api/user', routeloginPage);
app.use('/api/user', routeDashboardPage);

mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    app.listen(process.env.PORT, () => {
      console.log('App listening on port 3000!');
    });
  })
  .catch((err) => console.log(err));
