const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  marca: { type: String, required },
  modelo: { type: String, required },
  ano: { type: Date, required }
});

module.exports = mongoose.model('car', carSchema);
