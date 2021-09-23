// create connection between express server and mongodb

const mongoose = require('mongoose');

// connects /flights to the database, or creates /flights
mongoose.connect('mongodb://localhost/flights', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

// use default listener to confirm express server app and mongo database server are connected

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
})
// if console log doesn't appear, NOT WORKING