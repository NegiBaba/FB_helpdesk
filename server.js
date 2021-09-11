const express = require('express');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser')

// creates express http server
const app = express();

// uses cors for api calls
app.use(cors());

// express middleware handling the body parsing 
app.use(express.json());

// express middleware handling the form parsing
app.use(express.urlencoded({extended: false}));

app.use('/webhook', require('./routes/api/webhook'));

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log("server is running on PORT: ", { PORT }));
