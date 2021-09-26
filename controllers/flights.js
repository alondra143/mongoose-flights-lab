const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', { title: 'Flight Detail for: ', flight });
    });
};


function create(req, res) {
    // change departs from a string to a date value
    req.body.departs = new Date(req.body.departs);
    // generate random flight number for each request
    req.body.flightNo = Math.floor(Math.random() * 9999);
    // use Model to talk to database and create new Movie
    Flight.create(req.body, function(err, createdFlight){
        if (err){
            res.redirect('/flights/new');
        }
        console.log(createdFlight, '<-- new Flight Added');
        res.redirect('/flights');
    })
}
function newFlight(req, res) {
    res.render('flights/new');
};

function index(req, res) {
    Flight.find({}, function(err, flightsObjects) {
        console.log(flightsObjects, '< each flight object');
        res.render('flights/index', {
            flights: flightsObjects,
        })
    });
};