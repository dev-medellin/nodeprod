const express = require('express');

const bodyParser = require('body-parser');

const convertedUrl = require('./routes/store_routes');
const { param } = require('./routes/store_routes');

// const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/api', (req, res) => {
  console.log(req.body.params);
  let params = {
    status : 'Success',
    params : req.body.params
  };
  res.json( params );
})
// app.use('/', convertedUrl);

// app.use(errorController.get404);

// app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on ports ${ports}`));