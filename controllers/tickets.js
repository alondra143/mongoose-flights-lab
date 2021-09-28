const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTix,
    create,
};

function newTix(req,res) {
    res.render('tickets/new');
}


async function create(req,res) {
    try {
        const flightDocument = await Flight.findById(req.params.id)
        flightDocument._id.push(req.body);
        console.log(req.body);
        res.render('tickets/new');
    } catch(err) {
        res.send(err)
    }
}