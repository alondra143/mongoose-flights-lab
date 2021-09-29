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
        const flight = await Flight.findById(req.params.id)
        flight._id.push(req.body);
        console.log(req.body);
        res.redirect(`flights/${flight._id}`);
    } catch(err) {
        res.send(err)
    }
}