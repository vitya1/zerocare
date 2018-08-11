'use strict';

const path = require('path');
const http = require('http');
const express = require('express');
const nconf = require('nconf');
const bodyParser = require('body-parser');

nconf.argv().env()
    .file(path.join(__dirname, '.env.local'))
    .defaults({
        port: 8000,
        host: '127.0.0.1'
    });

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '../frontend/dist/')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send('User-agent: *\nDisallow: /');
});

app.use((req, res) => {
    res.status(404);
    res.send('404! Not found');
});

server.listen(nconf.get('port'), nconf.get('host'), () => {
    console.log('start host: '+ nconf.get('host') + ' port: ' + nconf.get('port'));
});
