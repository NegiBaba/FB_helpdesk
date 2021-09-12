const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("connected to Mongodb"))
.catch((err) => console.log("cannot connect to mongo server", err));

module.exports = mongoose;