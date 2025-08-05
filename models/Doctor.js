const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  city: String,
  rating: Number
});

module.exports = mongoose.model('Doctor', DoctorSchema);
