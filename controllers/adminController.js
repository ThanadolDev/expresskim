const admin = require('../models/adminModel.js')
function loginController(){
    try {
        admin.login(async (err, data) => {
              if (err) {
                  throw err;
              }
              await res.json({
                  status: 200,
                  data,
                  message: "login successfully"
              });
          });
      } catch (err) {
          res.status(500).json({
              status: 500,
              message: "An error occurred while retrieving user lists"
          });
      }
}

function registerController(){
    try {
        admin.register(async (err, data) => {
              if (err) {
                  throw err;
              }
              await res.json({
                  status: 200,
                  data,
                  message: "login successfully"
              });
          });
      } catch (err) {
          res.status(500).json({
              status: 500,
              message: "An error occurred while retrieving user lists"
          });
      }
}

function checkLoginController(){
    try {
        admin.checkLogin(async (err, data) => {
              if (err) {
                  throw err;
              }
              await res.json({
                  status: 200,
                  data,
                  message: "login successfully"
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
    loginController,
    checkLoginController,
    registerController
}