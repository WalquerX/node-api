const express = require('express');
const { addTicket, listTickets } = require('../services/tickets.service');
const router = express.Router();

router.post('/', (req, res) => {
    const result = addTicket(req.body);
    res.json(result)
});

router.get('/', (req, res) => {
    const result = listTickets();
    res.json(result);
})

module.exports = router;