# JWT-user-authentication-API-bolilerplate

[![Build Status](https://travis-ci.org/alexcambose/JWT-user-authentication-API-bolilerplate.svg?branch=master)](https://travis-ci.org/alexcambose/JWT-user-authentication-API-bolilerplate)

Express JSON API with JWT user authentication.

## Installation

```
npm install
```

## Usage
`npm run dev` will start a development server with [nodemon](https://nodemon.io/)

`npm run prod` will start `NODE_ENV=production` production server

## File structure
```
├── app
│   ├── models              # Contains all models
│   │   └── user.js         # User model
│   ├── routes              # contains all routes
│   │   │   ├── dashboard.js# which is the main page of application
│   │   │   ├── register.js # contains register routr
│   │   │   └── login.js    # contains login routes
│   ├── server.js           # where the server starts and routes for the root path
│   └── utils.js            # useful functions used in the entire application
├── validation.js           # where all user input check
├── verifyauth.js           # where all JWT verificationn happen
```


## Public Routes
**POST** `/api/user/register`

Parameters:
1. `email` **unique**
2. `name`
3. `password`

**POST** `/api/user/login`

Parameters:
1. `email`
2. `password`

Returns:

* `user` user object
* `token` jwt token

## Private Routes
In order to access private routes you **MUST** pass the `token` parameter that is given when logging in.
