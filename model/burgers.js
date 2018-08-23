//this takes all our configs. Basically, the point of the orm is to copy and paste code into the object and then the model just basically versions it to whatever we'd like

const orm = require('../config/orm.js');

var funk = {
    selectAll: function(x, y){
        orm.selectAll(x, y);
    },
    insertOne: function(db, cval, cval2, val, val2){
        orm.insertOne(db, cval, cval2, val, val2);
    },
    updateOne: function(db, column, y, val){
        orm.updateOne(db, column, y, val);
    }
}

// funk.selectFrom('numb', 'dingus');

//Not sure why our callbacks don't work, it probably has to do with some bullshit

//Not entirely sure what to do here

module.exports = funk;
