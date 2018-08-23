//This is our main server file at our root, where we run our app from

const express = require('express'); //this variable actually has to be called express I didn't realize before
const path = require('path');
const hb = require('express-handlebars');
const bp = require('body-parser');

var app = express();

var PORT = process.env.PORT || 500;

const router = require('./controller/appController');

// parse application/x-www-form-urlencoded



app.engine('handlebars', hb({defaultLayout: 'main'}) );
app.set('view engine','handlebars');
app.use(express.static(path.join(__dirname, "public")));
app.use(bp.urlencoded({ extended: true }));

// parse application/json

app.use(bp.json());

app.use(router);



app.listen(PORT, function (){
    console.log("Listening on PORT: " + PORT);
})
