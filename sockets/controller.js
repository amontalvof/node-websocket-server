const colors = require('colors/safe');

const socketController = (socket) => {
    console.log(colors.cyan('Client connected'), socket.id);

    socket.on('disconnect', () => {
        console.log(colors.cyan('Client disconnected'), socket.id);
    });

    socket.on('send-message', (payload, callback) => {
        const id = 123456;
        callback({ id, date: new Date().getTime() });
        socket.broadcast.emit('send-message', payload);
    });
};

module.exports = { socketController };
