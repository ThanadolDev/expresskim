const theater = require('../models/theaterModel')
function getTheaterController(){
    try {
        theater.getTheater(async (err, data) => {
              if (err) {
                  throw err;
              }
              await res.json({
                  status: 200,
                  data,
                  message: "theater retrieved successfully"
              });
          });
      } catch (err) {
          res.status(500).json({
              status: 500,
              message: "An error occurred while retrieving user lists"
          });
      }
}

function getShowtimeController(){
    try {
        theater.getShowtime(async (err, data) => {
              if (err) {
                  throw err;
              }
              await res.json({
                  status: 200,
                  data,
                  message: "show time retrieved successfully"
              });
          });
      } catch (err) {
          res.status(500).json({
              status: 500,
              message: "An error occurred while retrieving user lists"
          });
      }
}
function bookingMovieController(){
    try {
        theater.bookingMovie(async (err, data) => {
              if (err) {
                  throw err;
              }
              await res.json({
                  status: 200,
                  data,
                  message: "booking seat successfully"
              });
          });
      } catch (err) {
          res.status(500).json({
              status: 500,
              message: "An error occurred while retrieving user lists"
          });
      }
}
module.exports = {
    getShowtimeController,
    getTheaterController,
    bookingMovieController
}

