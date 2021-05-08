require('dotenv').config();
const express = require('express');
const cors = require('cors');
const colors = require('colors/safe');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT;

const middlewares = () => {
    // CORS
    app.use(cors());
    // public directory
    app.use(express.static('public'));
};

const sockets = () => {
    io.on('connection', (socket) => {
        console.log(colors.cyan('Client connected'), socket.id);
        socket.on('disconnect', () => {
            console.log(colors.cyan('Client disconnected'), socket.id);
        });
        socket.on('send-message', (payload) => {
            console.log(colors.cyan(payload));
        });
    });
};

const listen = () => {
    server.listen(port, () => {
        console.log(colors.cyan('Server running on port', port));
    });
};

// middlewares
middlewares();
sockets();
listen();
