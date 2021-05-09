// HTML References
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    // console.log('Connected to the server');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});
socket.on('disconnect', () => {
    // console.log('Disconnected from server');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('send-message',(payload) => {
    console.log(payload);
})

btnSend.addEventListener('click', () => {
    const message = txtMessage.value;
    const payload = {
        uid: 'qwe1asd2zxc',
        message,
        date: new Date().getTime(),
    };
    socket.emit('send-message', payload);
});
