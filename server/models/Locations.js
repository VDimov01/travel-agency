const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    street:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    });

const Location = mongoose.model('Location', locationSchema);

exports.Location = Location;