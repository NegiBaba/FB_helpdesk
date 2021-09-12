const express = require('express');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser')

require('dotenv').config();
require('./routes/api/mongo');

console.log(process.env.MONGO_URI);
// creates express http server
const app = express();

// uses cors for api calls
app.use(cors());

const webhook = require('./routes/api/webhook');
app.use(webhook);

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log("server is running on PORT: ", { PORT }));
