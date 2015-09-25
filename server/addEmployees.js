/**
 * Created by JacobSchoolmeesters on 9/24/15.
 */
/**
 * Created by JacobSchoolmeesters on 9/24/15.
 */
var express = require('express');

var randomName = require('./randomName');
var randomSkill = require('./randomSkill');
var randomScrum = require('./randomScrum');



var makeEmployee = function(){
    var projectArray = [];
    var employeeArray = [];

    var frontEndDeveloper = false;
    var clientSideDeveloper = false;
    var serverSideDeveloper = false;

    // loop
    //var i = 0;
    //while (frontEndDeveloper == false || clientSideDeveloper == false || serverSideDeveloper == false) {
        employeeArray = [];
        employeeArray[0] = randomName();
        employeeArray[1] = randomSkill();
        //if (employeeArray[1] == 1) frontEndDeveloper = true;
        //if (employeeArray[1] == 2) clientSideDeveloper = true;
        //if (employeeArray[1] == 3) serverSideDeveloper = true;
        employeeArray[2] = randomScrum();
        //console.log(frontEndDeveloper + " " + clientSideDeveloper + " " + serverSideDeveloper);
        projectArray[i] = [];
        projectArray[i] = employeeArray;
        i++;
    }
    return projectArray;
};


module.exports = makeEmployee;

