const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    contactName:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    holiday: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Holiday',
        required: true
    },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

exports.Reservation = Reservation;