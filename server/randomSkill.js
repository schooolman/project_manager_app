/**
 * Created by JacobSchoolmeesters on 9/24/15.
 */

var randomSkill = function () {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

module.exports = randomSkill;