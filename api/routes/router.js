const express = require('express');

const TestController = require('../http/controller/TestController');
const QuoteController = require('../http/controller/QuoteController');

const router = express.Router();


//#region TestController
router.patch('/update/:id', TestController.updateID);
router.post('/post', TestController.postUrlConvert);
router.get('/getOne/:id', TestController.getOne);
router.delete('/delete/:id', TestController.delete);
//#endregion Test Controller

//#region TestController
// router.patch('/update/:id', TestController.updateID);
router.post('/quote/post', QuoteController.postQuote);
router.get('/quote/fetchAll', QuoteController.fetchAll);
router.delete('/quote/removeList/:id', QuoteController.removeList);
//#endregion Test Controller


// https://www.aslamdoctor.com/simple-crud-app-using-express-nuxt-js-using-servermiddleware-part-1/



module.exports = router;