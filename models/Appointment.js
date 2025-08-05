const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  date: Date,
  status: String
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
