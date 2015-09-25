/**
 * Created by JacobSchoolmeesters on 9/23/15.
 */
var express = require('express');
var path = require('path');
//var router = express.router();

var app = express();

var index = require('./routes/index');

var server = app.listen(3000, function(){
    //call back function tells us we are up and running
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

app.use(express.static(path.join(__dirname, './public')));

app.use('/', index);

module.exports = app;