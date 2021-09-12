const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin-piyush:MONGO_PASS@cluster0.gpjmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log("connected to Mongodb"));

module.exports = mongoose;