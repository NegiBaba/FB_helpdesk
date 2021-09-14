require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected to Mongodb"))
.catch((err) => console.log("cannot connect to mongo server"));

module.exports = mong;