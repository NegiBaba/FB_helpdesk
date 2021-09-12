const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin-piyush:MongoDB123@cluster0.gpjmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log("connected to Mongodb"));

module.exports = mongoose;