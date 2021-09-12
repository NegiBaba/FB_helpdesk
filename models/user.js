const mongoose = require('mongoose');

const user = new mongoose.Schema({
    userId: String,
    chat: chat,
});

const chat = new mongoose.Schema({
    sender_id: String,
    reciever_id: String,
    message: String,
    time: Date.now,
    id: Number,
});

module.exports = mongoose.model('user', user);