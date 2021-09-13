const request = require('request');
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server
    
app.post('/user', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log("body is this - ", req.body);
    res.sendStatus(200);
})

app.get('/user', (req, res) => {
    res.send("hello");
})

module.exports = app;