//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/contactmanagementsystem'));


app.listen(process.env.PORT || 6060);