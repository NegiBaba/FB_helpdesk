const request = require('request');
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

const mongoose = require('./mongo');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

app.get('/user', (req, res) => {
    console.log(db.collection(req.query.userId));
    res.send("res from backed");
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