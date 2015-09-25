/**
 * Created by JacobSchoolmeesters on 9/24/15.
 */

var fullName = function (){
var FirstName = "";
var LastName = "";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//var possible = "0123456789";
for(var i = 0; i < 10; i++) {
    FirstName += possible.charAt(Math.floor(Math.random() * possible.length));
}
for(var i = 0; i < 10; i++) {
    LastName += possible.charAt(Math.floor(Math.random() * possible.length));
}
return FirstName.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) + " " + LastName.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


module.exports = fullName;