const mongoose = require('mongoose');

const mongoString = process.env.DB
mongoose.connect(mongoString);
const db = mongoose.connection
db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

module.exports = db