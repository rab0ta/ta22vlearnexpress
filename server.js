const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// req => request , res => response
app.get('/', (req, res) => {
    console.log(req.query);
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/answer', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});
app.post('/answer', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});