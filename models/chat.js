const mongoose = require('mongoose');

const chat = new mongoose.Schema({
    sender_id: String,
    reciever_id: String,
    message: String,
    time: Date.now,
    id: Number,
});

module.exports = mongoose.model('chat', chat);