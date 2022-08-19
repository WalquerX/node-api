// const ticketMockup = require('../mockups/ticket.mockup');
const TicketsDataAccess = require('../dataAccess/tickets.dataAccess');

const addTicket = (ticket) => {
    const result = { complete: false };
    result.data = { ticket: TicketsDataAccess.add(ticket) };
    result.complete = true;
    return result;
}

const listTickets = () => {
    const result = { complete: false };
    result.data = { tickets: TicketsDataAccess.list() };
    result.complete = true;
    return result;
}

module.exports = { addTicket, listTickets }