require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected to Mongodb"))
.catch((err) => console.log("cannot connect to mongo server"));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

module.exports = db;