const request = require('request');
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

const mongo= require('./mongo');
const db = mong.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

app.get('/user', (req, res) => {
    const col = req.query.userId;
    console.log("user id id : ", col);
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