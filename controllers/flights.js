const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
};

function newFlight(req, res) {
    res.render('flights/new');
}


function index(req, res) {
    Flight.find({}, function(err, flightsObjects) {
        console.log(flightsObjects, '< each flight object');
        res.render('flights/index', {
            flights: flightsObjects,
        })
    });
};