const model = require('../models/supplyModels')

function index(res){
    console.log('controller test')
    text = 'text'
    model.index(text);
}
function get(){

}

module.exports.index = index;