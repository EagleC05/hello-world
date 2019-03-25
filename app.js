const express = require('express');
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 8080;

var app = express();

//app.get('/', (request, response) => {
    ////response.send('<h1>Hello Express!</h1>');
//});

hbs.registerPartials(__dirname + '/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('message', (text) => {
    return text.toUpperCase();
})

app.set('view engine', 'hbs');
app.use((request, response, next) => {
    //var time = new Date().toString();
    //var log = `${time}: ${request.method} ${request.url}`;
    //fs.appendFile('server.log', log + '\n', (error) => {
        //if (error) {
            //console.log('Unable to log message')
        //}
    //})
    response.render("maintence.hbs", {
        });
});

app.get('/', (request, response) => {
    response.render('weather.hbs', {
        name: 'Eagle',
        school: [
            'BCIT',
            'SFU',
            'UBC'
        ]
    });
    
});

app.get('/info', (request, response) => {
    response.render('about.hbs', {
        title: "About page",
        years: new Date().getFullYear(),
        welcome:"Hello!"
    });
});

app.get('/404', (request, response) => {
    response.render('home.hbs', {
        error: 'Page not found'
    });
});


app.listen(port, () => {
    console.log(`Server is up on the port ${port}`);
});