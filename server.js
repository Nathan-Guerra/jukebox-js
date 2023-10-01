const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3333;

app.listen(port, () => {
    console.log(`App is listening in port ${port}`);
});

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/client', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + '/index.html');
});