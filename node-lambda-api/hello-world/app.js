const serverless = require('serverless-http');
const express = require('express');

const app = new express();

app.get('/hellonode', (req, res) => {
    res.send('hello from NODE.js')
});

module.exports.lambdaHandler = serverless(app);