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
    const userId = req.body.userId;
    // const User = new mongoose.model(userId, chat);

    // console.log(User.find({}));
    console.log(req.url);
    res.send('message from the backend');
})

module.exports = app;