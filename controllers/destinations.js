const Flight = require('../models/flight');

module.exports = {
    create,
};

function create(req, res) {
    req.body.arrival = new Date(req.body.arrival);
    req.body.airport.toUpperCase();
    console.log(req.body);
    // find the complete flight object
    Flight.findById(req.params.id, function (err, flightDocument) {
        // add object to destination key's value
        flightDocument.destination.push(req.body);
        // save new info to actual database
        flightDocument.save(function(err){
            res.redirect(`/flights/${req.params.id}`);
        });
    });
};