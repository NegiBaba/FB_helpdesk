const request = require('request');
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

const mongoose = require('mongoose');
const db = require('./mongo');
const chat = require('../../models/chat');

app.get('/user', (req, res) => {
    db.on('open', function (ref) {
        console.log('Connected to mongo server.');
        //trying to get collection names
        db.db.listCollections().toArray(function (err, names) {
            console.log(names); // [{ name: 'dbname.myCollection' }]
        });
    })
    res.send('from backend');
});

app.post('/user', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log("body is this - ", req.body);
    res.sendStatus(200);
})

app.get('/user', (req, res) => {
    db.collection.find()
})

module.exports = app;