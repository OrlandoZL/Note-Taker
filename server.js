const fs = require("fs");
const express = require("express");
const path = require('path');
const api = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', api);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__durname, "/public/notes.html"))
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
});


app.listen(PORT, function ()  {
    console.log(`now listening on PORT: ${PORT}`);
});