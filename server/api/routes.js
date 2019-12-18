const express = require('express');

const router = express.Router();

// Testing Routes
router.get('/v1/ping', (req, res) => res.json({ message: 'pong' }));

module.exports = router;
