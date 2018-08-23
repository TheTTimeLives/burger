//Our orm can basically just be a respoitory of code we have already used before to speed up the process of making things

//GET PATHS

const connect = require('../config/connections'); // our database object

//ALL DATABASE FUNCTIONS

var orm = {

        selectAll: function (x, y){
            var querystring = 'SELECT ' + x + " FROM " + y + ';';
            connect.query(querystring, function (err, data){
                if (err) {
                    throw err;
                }                // cb(data);

            });

        },
        insertOne: function (db, cval, cval2, val, val2){
            var querystring = 'INSERT INTO ' + db + "(" + cval +  ", " + cval2 + ") VALUES ('" + val + "', " + val2 + ");";
            connect.query(querystring, function (err, data){
                if (err) {
                    throw err;
                }                // cb(data);
                console.log(querystring);
                // funk.insertOne('burgers','burger_name','devoured',req.body.key, false);

                // var queryString = "INSERT INTO " + table + " (columnText, columnBool) VALUES ('" + val + "', FALSE);"

            });

        },
        updateOne: function (db, column, string, equals){
            var querystring = 'UPDATE ' + db + ' SET ' + column + " = " + string + " WHERE " + equals + ';';
            connect.query(querystring, function (err, data){
                if (err) {
                    throw err;
                }                // cb(data);
                console.log(querystring);
            });

        }


}


// orm.selectFrom('numb', 'dingus'); 

// Not sure quite how to set this, but you get errors with callbacks sometimes if you don't set them to optional, which I don't know how to do

module.exports = orm;

