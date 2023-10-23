const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url).then(() => console.log('Connectes to DB..'));
};

module.exports = connectDB;