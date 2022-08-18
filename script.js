const express = require('express');
var app = express();
const pr = console.log;
var fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index.ejs', { data: 'SamannoyB' });
});

app.get('/newLink', (req, res) => {

});

app.post('/newLink', (req, res) => {
    const bodylink = req.body.link;
    const pageRequested = number;

    const random = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var first = random[Math.floor(Math.random() * random.length)],
second = random[Math.floor(Math.random() * random.length)],
third = random[Math.floor(Math.random() * random.length)],
fourth = random[Math.floor(Math.random() * random.length)],
fifth = random[Math.floor(Math.random() * random.length)],
sixth = random[Math.floor(Math.random() * random.length)];

var number = first + second + third + fourth + fifth + sixth;
pr(number)
    
   /* number = {
        link: `${req.body.link}`
    }

    fs.writeFileSync('links.json', JSON.stringify(number));*/

    res.send(`Your new link is http://localhost:8080/${number}`);

    app.get(`/${number}`, (req, res) => {
        res.redirect(bodylink);
    })
})
app.listen(8080);