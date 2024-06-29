var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema({
    brand: { type: String, required: true, maxlength: 150 },
    model: { type: String, required: true, maxlength: 200 },
    color: { type: String, required: true, maxlength: 50 },
    type: { type: String, required: true, maxlength: 200 },
    body: { type: String, required: true, maxlength: 200 },
    traction: { type: String, required: true, maxlength: 100 },
    doors: { type: String, required: true, maxlength: 150 },
    power: { type: String, required: true, maxlength: 150 },
    year: {type: String, required: true},
    fuel: { type: String, required: true, maxlength: 150 },
    plate: { type: String, required: true, maxlength: 30 }
});

//Export model
module.exports = mongoose.model('Car', CarSchema);