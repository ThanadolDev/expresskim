function index(text){
    console.log('model test')
    let sql = `SELECT * FROM` + text;
    db.query(sql, function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        data,
        message: "User lists retrieved successfully"
      })
    })
}
module.exports.index = index