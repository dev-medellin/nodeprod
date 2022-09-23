require('dotenv').config();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path')
const User = require('./http/models/userModel')

var env = require('./config');

process.env.DB              = env.config.DATABASE_URL
process.env.APP_URL         = env.config.APP_URL 
process.env.API_URL         = env.config.API_URL
process.env.FILE_URL        = env.config.FILE_URL
process.env.FILE_BASE_URL   = env.config.FILE_BASE_URL
process.env.APP_FB          = env.config.APP_FB
process.env.APP_HOST        = env.config.APP_HOST
process.env.JWT_SECRET      = env.config.JWT_SECRET

//#region DATABASE
  require('./connection/db');
//#endregion

const express = require('express');
const routes = require('./routes/router');
const app = express();

// app.use(express.json());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
app.use(async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
 if (req.headers["x-access-token"]) {
  const accessToken = req.headers["x-access-token"];
  const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
  // Check if token has expired
  if (exp < Date.now().valueOf() / 1000) { 
   return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
  } 
  res.locals.loggedInUser = await User.findById(userId); next(); 
 } else { 
  next(); 
 } 
});
app.use('/api', routes)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})