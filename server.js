const express = require('express');
const cors = require('cors');
// creates express http server
const app = express();
// uses cors for api calls
app.use(cors());

const { Server } = require('socket.io');
const { createServer } = require('http');

require('dotenv').config();
require('./routes/api/mongo');



const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    }
});

const webhook = require('./routes/api/webhook');
const user = require('./routes/api/user');
app.use(webhook);
app.use(user);

app.get('/', (req, res) => {
    res.send('helpdesk main page is here')
})

const PORT = process.env.PORT || 1337;

httpServer.listen(PORT, () => console.log("server is running on PORT: ", { PORT }));
