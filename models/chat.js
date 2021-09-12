const mongoose = require('mongoose');

const chat = new mongoose.Schema({
    message: String,
    createdAt: Date.now,
    id: Number,
},{timestamps:true});

module.exports = mongoose.model('chat', chat);