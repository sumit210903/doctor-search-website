const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/:email', async (req, res) => {
    const user = await User.findOne({ email: req.params.email });
    res.json(user);
});

router.post('/update', async (req, res) => {
    const { email, name, phone } = req.body;
    const user = await User.findOneAndUpdate({ email }, { name, phone }, { new: true });
    res.json(user);
});

module.exports = router;
