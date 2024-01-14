const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    freeSlots:{
        type: Number,
        required: true
    },
    location:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    }
});

const Holiday = mongoose.model('Holiday', holidaySchema);

exports.Holiday = Holiday;