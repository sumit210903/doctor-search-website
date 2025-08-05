const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    try {
        const message = await Contact.create(req.body);
        res.status(201).json(message);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
