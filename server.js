'use strict';

const express = require('express');
const errorHandler = require('./errors/500.js');
const notFoundHandler = require('./errors/404.js');


const app = express();

// add routes
app.get('/', (req, res)=> {
    res.status(200).send('Hello from Server home route');
});

app.get('/data', (req, res)=> {
    res.status(200).json({
        name: "ishaq",
        age: 22
    });
});

// app.get('/bad-request', (req,res)=> {
//     throw new Error('manual error');
// });

app.get('/bad-request-2', (req,res)=> {
    let arr;
    arr.push(2);
});

// Handlers -> Middlewares
app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {
    app.listen(port, ()=> console.log(`App is Runnning on ${port}`));
}

module.exports = {
    app: app,
    start: start
}
