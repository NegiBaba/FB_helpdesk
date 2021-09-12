require('dotenv').config();
const mongoose = require('mongoose');

console.log(process.env);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("connected to Mongodb"))
.catch((err) => console.log("cannot connect to mongo server", err));

module.exports = mongoose;