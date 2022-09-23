const express = require('express');
const authMiddleware  = require("../middleware/auth");
var router = express.Router();

const TestController = require('../http/controller/TestController');
const QuoteController = require('../http/controller/QuoteController');
const userController = require('../http/controller/userController');

express.application.prefix = express.Router.prefix = function(path, configure) {
    configure(router);
    this.use(path, router);
    return router;
}




//#region TestController
// router.patch('/update/:id', TestController.updateID);
// router.post('/post',TestController.postUrlConvert);
// router.get('/getOne/:id', TestController.getOne);
// router.delete('/delete/:id', TestController.delete);
// //#endregion Test Controller

// //#region TestController
// // router.patch('/update/:id', TestController.updateID);
// // router.post('/quote/post',authMiddleware, QuoteController.postQuote);
// router.get('/quote/fetchAll', QuoteController.fetchAll);
// // router.delete('/quote/removeList/:id', QuoteController.removeList);
// // //#endregion Test Controller


// // router.post('/signup', userController.signup);
 
router.post('/login', userController.login);
router.get('/user', userController.getUser);

router.prefix('/quote',function (user) {
    user.route('/post').post(authMiddleware,QuoteController.postQuote);
    user.route('/fetchAll').get(authMiddleware,QuoteController.fetchAll);
});
 
// router.get('/user', userController.getUser);
 
// router.get('/users', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);
 
// router.put('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.updateUser);
 
// router.delete('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser);


// https://www.aslamdoctor.com/simple-crud-app-using-express-nuxt-js-using-servermiddleware-part-1/



module.exports = router;