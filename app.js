require('dotenv').config();
const express = require('express');
const cors = require('cors');
const colors = require('colors/safe');

const app = express();
const port = process.env.PORT;
const paths = {};

const middlewares = () => {
    // CORS
    app.use(cors());
    // public directory
    app.use(express.static('public'));
};

const routes = () => {
    // routes here
};

const listen = () => {
    app.listen(port, () => {
        console.log(colors.cyan('Server running on port', port));
    });
};

// middlewares
middlewares();
//routes of my app
routes();

listen();
