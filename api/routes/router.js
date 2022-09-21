const express = require('express');

const TestController = require('../http/controller/TestController');

const router = express.Router();


//#region TestController
router.patch('/update/:id', TestController.updateID);
router.post('/post', TestController.postUrlConvert);
router.get('/getOne/:id', TestController.getOne);
router.delete('/delete/:id', TestController.delete);
//#endregion Test Controller

// https://www.aslamdoctor.com/simple-crud-app-using-express-nuxt-js-using-servermiddleware-part-1/



module.exports = router;