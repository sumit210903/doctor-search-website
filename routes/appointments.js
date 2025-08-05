const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, doctorId, date } = req.body;
  const appointment = await Appointment.create({ userId, doctorId, date, status: 'Pending' });
  res.json(appointment);
});

router.get('/:userId', async (req, res) => {
  const appointments = await Appointment.find({ userId: req.params.userId }).populate('doctorId');
  res.json(appointments);
});

module.exports = router;
