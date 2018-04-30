var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imgPath: { type: String, require: true },
    title: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String },
    price: { type: Number, require: true },
    unit: {type: String, require: true}
});

module.exports = mongoose.model('Product', schema);