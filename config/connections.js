//This file holds all of our database connection stuff premade

// const mysql = require('mysql');

var mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'burgers_db'
})

connect.connect(function(err){
    if (err) throw err;
    console.log ("MYSQL connected");
})


module.exports = connect;