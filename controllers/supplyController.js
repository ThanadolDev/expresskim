const supplymodel = require("../models/supplyModels");
const upload = multer({ dest: './public/data/uploads/' })

function getsp(req, res) {
  try {
    supplymodel.getSupply(async (err, data) => {
          if (err) {
              throw err;
          }
          await res.json({
              status: 200,
              data,
              message: "unit test retrieved successfully"
          });
      });
  } catch (err) {
      res.status(500).json({
          status: 500,
          message: "An error occurred while retrieving user lists"
      });
  }
}

function getMovieController(req, res) {
  try {
    supplymodel.getMovie(async (err, data) => {
          if (err) {
              throw err;
          }
          await res.json({
              status: 200,
              data,
              message: "User lists retrieved successfully"
          });
      });
  } catch (err) {
      res.status(500).json({
          status: 500,
          message: "An error occurred while retrieving user lists"
      });
  }
}

function addMovieController(req, res) {
  try {
    supplymodel.addMovie(async (err, data) => {
          if (err) {
              throw err;
          }
          await res.json({
              status: 200,
              data,
              message: "User lists retrieved successfully"
          });
      });
  } catch (err) {
      res.status(500).json({
          status: 500,
          message: "An error occurred while retrieving user lists"
      });
  }
}

function editMovieController(req, res) {
  try {
    supplymodel.editMovie(async (err, data) => {
          if (err) {
              throw err;
          }
          await res.json({
              status: 200,
              data,
              message: "User lists retrieved successfully"
          });
      });
  } catch (err) {
      res.status(500).json({
          status: 500,
          message: "An error occurred while retrieving user lists"
      });
  }
}


function delMovieController(req, res) {
  try {
    supplymodel.delMovie(async (err, data) => {
          if (err) {
              throw err;
          }
          await res.json({
              status: 200,
              data,
              message: "User lists retrieved successfully"
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
  getsp,
  addMovieController,
  editMovieController,
  getMovieController,
  delMovieController
};
