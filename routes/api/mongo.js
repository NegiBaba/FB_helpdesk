const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected to Mongodb"))
.catch((err) => console.log("cannot connect to mongo server"));

module.exports = mongoose;