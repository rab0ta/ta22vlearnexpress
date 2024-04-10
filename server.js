const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
app.use(bodyParser.urlencoded({extended:true}));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// req => request , res => response
app.get('/', (req, res) => {
    console.log(req.query);
    res.render('index.njk');
});
app.get('/answer', (req, res) => {
    console.log(req.query);
    res.render('answer.njk', req.query);
});
app.post('/answer', (req, res) => {
    console.log(req.body);
    res.render('answer.njk', {...req.query, ...req.body});
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});