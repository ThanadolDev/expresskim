var express = require("express");
var app = express();
mysql = require('mysql2'),
cors = require('cors'),
bodyParser = require('body-parser');

const router = require("./router.js");

app.use('/api',router);


db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'new_schema'
})

// const config = {
//   db: {
//     /* don't expose password or any sensitive info, done only for demo */
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "new_schema",
//   }
// };
// module.exports = config;

// app.use('/', function(req,res){
//     let sql = `SELECT * FROM test`;
//     db.query(sql, function(err, data, fields) {
//       if (err) throw err;
//       res.json({
//         status: 200,
//         data,
//         message: "User lists retrieved successfully"
//       })
//     })
// })

console.log("listening to port 3000");
app.listen(3000);
