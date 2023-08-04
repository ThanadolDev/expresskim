
function getTheater(){
    let sql = `SELECT * FROM test`;
    db.query(sql, function(err, data, fields) {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data);
    });
}

function getShowtime(){
 let sql = ''
 db.query(sql, function(err,data){
    if(err){
        return callback(err, null)
    }
    return data
 })
}

function bookingMovie(){
    let sql = ''
    db.query(sql, function(err,data){
       if(err){
           return callback(err, null)
       }
       return data
    })
}

module.exports = {
    getTheater,
    getShowtime,
    bookingMovie
}