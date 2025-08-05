const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

router.get('/', async (req, res) => {
  const { q } = req.query;
  const doctors = await Doctor.find({
    $or: [
      { name: new RegExp(q, 'i') },
      { specialty: new RegExp(q, 'i') },
      { city: new RegExp(q, 'i') }
    ]
  });
  res.json(doctors);
});

module.exports = router;
