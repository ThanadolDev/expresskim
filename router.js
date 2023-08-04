const express = require("express");
const router = express.Router();
const supply_controller = require('./controllers/supplyController')
const theaterController = require('./controllers/theaterController')
const adminController = require('./controllers/adminController')

// Home page route.
// router.get("/", supply_controller.index);

router.get('/test', supply_controller.getsp);
router.get('/getMovie', supply_controller.getMovieController);
router.post('/addMovie', supply_controller.addMovieController);
router.put('/editMovie/:id', supply_controller.editMovieController);
router.delete('/delMovie/:id', supply_controller.delMovieController);

router.get('/theater', theaterController.getTheaterController);
router.get('/showtime', theaterController.getShowtimeController)
router.post('/booking',theaterController.bookingMovieController)

router.post('/login',adminController.loginController)
router.post('/checklogin',adminController.checkLoginController)
router.post('/register',adminController.registerController)

// About page route.

module.exports = router;