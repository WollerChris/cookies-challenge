var cookieParser = require('cookie-parser');
var express = require('express');
var app = express();

app.use(cookieParser());

app.listen(3000);

app.get('/login', function(req, res){
   res.cookie('name', 'Chris').send('cookie set'); //Sets name = express
   console.log('Cookies: ', req.cookies)
   console.log('Cookies: ', req.signedCookies)
});

app.get('/hello', function(req,res) {
    if (req.cookies !== undefined) {
        res.status(200).send(`Welcome ${req.cookies}!`)
        console.log(`Welcome ${req.cookies}!`)
    }
})



