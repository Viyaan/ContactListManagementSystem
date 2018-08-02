const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/dist')));

const port = process.env.PORT || '3001';
app.set('port',port);

//Path Location Strategy

app.get('*', function(req, res) {
res.sendFile(path.join(__dirname + 'dist/index.html'));
})

const server =http.createServer(app);
server.listen(port, () => console.log('Running'));