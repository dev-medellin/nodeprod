const express = require('express');
const auth = require("../middleware/auth");

const TestController = require('../http/controller/TestController');
const QuoteController = require('../http/controller/QuoteController');
const userController = require('../http/controller/userController');

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


router.post('/signup', userController.signup);
 
router.post('/login', userController.login);
 
router.get('/user',auth, userController.allowIfLoggedin, userController.getUser);
 
router.get('/users', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);
 
router.put('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.updateUser);
 
router.delete('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser);


// https://www.aslamdoctor.com/simple-crud-app-using-express-nuxt-js-using-servermiddleware-part-1/



module.exports = router;