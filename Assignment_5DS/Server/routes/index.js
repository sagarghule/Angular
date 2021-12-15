//routing logic to redirect the request to appropriate handler
const express = require('express');
const authController = require('../controller/auth');
const storage = require("../middleware/multer");

//import controllers
const userDataController = require('../controller/user');
const momentDataController = require('../controller/moment');

//create a router
const router = express.Router();

//declare the routes
router.post('/loginUser',userDataController.loginUser,authController.generator);
router.patch('/updatePassword',userDataController.updatePassword,authController.generator);
router.post('/createUser',userDataController.createUser,authController.generator);
router.put('/updateUser',authController.verifyToken,userDataController.updateUser,authController.generator);
router.put('/updateUserImage',authController.verifyToken,storage,userDataController.updateImage);
router.get('/loggedIn',authController.verifyToken,userDataController.loggedIn,authController.generator);
//route for moment
router.post('/createMoment',authController.verifyToken,momentDataController.createMoment);
router.put('/updateMomentImage/:id',authController.verifyToken,storage,momentDataController.updateImage);
router.put('/updateMoment',authController.verifyToken,momentDataController.updateMoment);
router.delete('/deleteMoment/:id',authController.verifyToken,momentDataController.deleteMoment);
router.get('/getMoments',authController.verifyToken,momentDataController.getAllMoments);
router.get('/getMomentById/:id',authController.verifyToken,momentDataController.getSingleMoment);

//export the router
module.exports = router;