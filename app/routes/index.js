const express = require('express');
const tickets = require('./tickets.route.js');

const router = express.Router();

router.use('/tickets', tickets)

module.exports = router;