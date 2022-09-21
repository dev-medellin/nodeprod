const express = require('express');

const TestController = require('../controller/TestController');

const router = express.Router();



router.get('/', TestController.getAllUrlConvert);

router.post('/post', TestController.postUrlConvert);

router.get('/:id', TestController.getByIdConvert);


// https://www.aslamdoctor.com/simple-crud-app-using-express-nuxt-js-using-servermiddleware-part-1/



module.exports = router;