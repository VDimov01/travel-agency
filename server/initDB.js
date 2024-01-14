const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/travel-agency';

exports.initDatabase = () => mongoose.connect(connectionString);