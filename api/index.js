require('dotenv').config();

var env = require('./config');

process.env.DB              = env.config.DATABASE_URL
process.env.APP_URL         = env.config.APP_URL 
process.env.API_URL         = env.config.API_URL
process.env.FILE_URL        = env.config.FILE_URL
process.env.FILE_BASE_URL   = env.config.FILE_BASE_URL
process.env.APP_FB          = env.config.APP_FB
process.env.APP_HOST        = env.config.APP_HOST


const db = require('./connection/db');
const express = require('express');
const routes = require('./routes/router');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use('/api', routes)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})