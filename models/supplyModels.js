// supplyModel.js
const upload = multer({ dest: './public/data/uploads/' })


function getSupply(callback) {
  
    let sql = `SELECT * FROM test`;
    db.query(sql, function(err, data, fields) {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data);
    });
}

function getMovie(callback) {
  let sql = `SELECT * FROM movie`;
  db.query(sql, function(err, data, fields) {
      if (err) {
          return callback(err, null);
      }
      return callback(null, data);
  });
}

function addMovie(callback) {
  let sql = `INSERT INTO movie ('title', 'director', 'relase_date', 'image', 'desc') VALUES ( 'spidermunn', 'cruse', '2022-02-02', `+ Date.now()+`, 'top gun');`
  db.query(sql, function(err, data, fields) {
      if (err) {
          return callback(err, null);
      }
      return callback(null, data);
  });
}

function editMovie(req,callback) {
  let title = req.body.title 
  let sql = `UPDATE movie SET title =`+ title  +  `WHERE (idmovie = `+request.params.id+`);`;
  db.query(sql, function(err, data, fields) {
      if (err) {
          return callback(err, null);
      }
      return callback(null, data);
  });
}

function delMovie(callback) {
  let sql = `DELETE FROM movie WHERE (idmovie = `+ request.params.id+`);`;
  db.query(sql, function(err, data, fields) {
      if (err) {
          return callback(err, null);
      }
      return callback(null, data);
  });
}

module.exports = {
    getSupply,
    getMovie,
    editMovie,
    delMovie,
    addMovie
};
