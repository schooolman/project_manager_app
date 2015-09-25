
var express = require('express');
var router = express.Router();

var path = require('path');

var makeEmployees = require("../makeEmployees");


router.get( '/', function(req, res, next) {
    console.log('Here is a console log');
    res.sendFile(path.join(__dirname,'../public/views/index.html'));

    //declaring the file. equal to possible parameters OR equal to index view
    //var file = req.params[0] || ' views/index.html';

    //res.sendFile(path.join(__dirname, '../public', file));
    //res.send('Hello World!');
    //next(); //specific to Express
});


router.get('/makeEmployees', function(req, res, next){
    var employee = makeEmployees("initial");
    console.log(employee);
    res.send(employee);
});

router.get('/addEmployees', function(req, res, next){
    var employee2 = makeEmployees("add");
    console.log( employee2);
    res.send(employee2);
});


module.exports = router;