const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

function login(request, params) {
  let sql = `SELECT * FROM admin where username =` + request.params.username;
  db.query(sql, function (err, data, fields) {
    if (err) {
      return callback(err, null);
    }
    return callback(null, data);
  });
  bcrypt.compare(request.body.password, data.password, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result == true) {
      console.log("pass");
      let token = jwt.sign(
        {
          jwt: data.id,
        },
        myPlaintextPassword
      );
      res.cookie("id", token);
      console.log(document.cookie);
    } else {
      console.log("something went wrong");
    }
  });
}

function register(request) {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(request.body.password, salt, function (err, hash) {
      if (err) {
        console.log(err);
      }
      const username = request.body.username;
      const password = hash;
    });
  });
}

function checkLogin(req) {
  let cookie = req.cookie.id;
  try {
    jwt.verify(cookie, myPlaintextPassword, function (err, decoded) {
      console.log(decoded);
      return true
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  register,
  login,
  checkLogin,
};
