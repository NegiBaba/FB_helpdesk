const request = require('request');
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

const mongoose = require('mongoose');
const db = require('./mongo');
const chat = require('../../models/chat');

app.get('/user', (req, res) => {
    mongoose.connection.db.listCollections().toArray(function(err, names) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(names);
        }
    });
});

app.get('/messages', (req, res) => {
    const userId = req.query.userId;
    const User = new mongoose.model(userId, chat);
    console.log('this is user ID: ', userId);
    // User.find({}, (error, message) => {
    //     console.log(message);
    // })
    res.send('message from the backend');
})

module.exports = app;