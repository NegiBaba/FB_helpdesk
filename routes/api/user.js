const request = require('request');
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

const mongoose = require('mongoose');
const db = require('./mongo');
const chat = require('../../models/chat');

app.get('/user', (req, res) => {
    const col = req.query.userId;
    console.log("user id id : ", col);

    const User = new mongoose.model(col, chat);
    User.find({}, (err, message_list) => {
        console.log(message_list.message);
    });
    res.send("response from backend");
})

app.post('/user', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log("body is this - ", req.body);
    res.sendStatus(200);
})

app.get('/user', (req, res) => {
    db.collection.find()
})

module.exports = app;