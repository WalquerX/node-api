const fs = require('fs')
const { DB_PATH, OBJ_TICKETS } = require('../../config')
const ticketFile = `${DB_PATH}${OBJ_TICKETS}`;

const readTickets = () => {
    const data = fs.readFileSync(ticketFile);
    return JSON.parse(data);
}

module.exports = {
    add: (ticket) => {
        const tickets = readTickets();
        const newId = tickets.length === 0 ? 1 : tickets[tickets.length - 1].id + 1;
        const newTicket = {
            ...ticket,
            id: newId
        }
        tickets.push(newTicket)
        fs.writeFileSync(ticketFile, JSON.stringify(tickets));
        return newTicket;
    },
    list: () => {
        return readTickets();
    }
}