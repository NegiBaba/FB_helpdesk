const express = require('express');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser')

require('dotenv').config();
require('./routes/api/mongo');

// creates express http server
const app = express();

// uses cors for api calls
app.use(cors());

const webhook = require('./routes/api/webhook');
const user = require('./routes/api/user');
app.use(webhook);
app.use(user);

app.get('/', (res, req) => {
    res.send('helpdesk main page is here')
})
const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log("server is running on PORT: ", { PORT }));
