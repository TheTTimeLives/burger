//the controller is what goes into the function and it takes the model, which has all the prepackaged configs

var funk = require('../model/burgers');

const express = require('express');
const path = require('path');
// const bp = require('body-parser');


var router = express.Router(); //basically this router can contain all of the routes within the file, so when you export it via module exports, it will have all that shit in your server so you can MVC and keep things seperated. This means that it's 'mountable'

router.get('/index', function (req, res){
    console.log('I am root');

    var butts = {
        key: 10
    }
    res.render('index', butts)
    
})

router.get('/full', function (req, res){
    console.log('I am root');
 
    var butts = {
        key: 10
    }
    res.render('full', butts)
    
})

router.post('/api', function(req, res){
    console.log('Post recieved');
    console.log(req.body);
    funk.insertOne('burgers','burger_name','devoured',req.body.key, false);
    res.send(req.body.key);

})

router.put('/api/update', function (req, res){
    console.log('Data updating on back end...');
    console.log(req.body);
    var arguement = req.body.key;
    funk.updateOne('burgers', 'devoured', '1', `burger_name = '${arguement}'`)

})


module.exports = router;