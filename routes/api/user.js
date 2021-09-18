const request = require('request');
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

const mongoose = require('mongoose');
const db = require('./mongo');
const chat = require('../../models/chat');
const io = require('socket.io-client');

const socket = io("https://helpdesk-testing.herokuapp.com");

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

    User.find({}, (error, message) => {
        res.send(message);
    })
})

module.exports = app;