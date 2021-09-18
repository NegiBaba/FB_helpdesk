const express = require('express');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser')

require('dotenv').config();
require('./routes/api/mongo');
const {createServer } = require('http');
const { Server, Socket } = require('socket.io');

// creates express http server
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    }
});

// uses cors for api calls
app.use(cors());

const webhook = require('./routes/api/webhook');
const user = require('./routes/api/user');
app.use(webhook);
app.use(user);

app.get('/', (req, res) => {
    res.send('helpdesk main page is here')
})

io.on('connection', (socket) => {
    socket.emit('check', 'print this');
})

const PORT = process.env.PORT || 1337;

httpServer.listen(PORT, () => console.log("server is running on PORT: ", { PORT }));
