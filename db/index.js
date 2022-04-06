const mongoose = require('mongoose');


// connect to our mongoose
// connect to our db
mongoose.connect('mongodb://127.0.0.1:27017/userDb')
.then(() => {
    console.log("Succesfully connected to MongoDB");
}).catch((e) => {console.error('Connection error', e.message)})

const db = mongoose.connection

// later when we try to make a connection to our db
db.on('error', console.error.bind(console, "MongoDB connection error:"))

module.exports = db;

