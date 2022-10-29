const fs = require("fs");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));


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