// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


// --BELOW--
// importing and requiring Employee class
const Employee = require("./Employee");

// --BELOW--
// create Intern class constructor and extend Employee with Intern's specific argument
// from Intern.test.js it expects "school"
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    // --BELOW--
    // following method specifications from Intern.test.js
    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

// --BELOW--
// export Intern class constructor out of this file
module.exports = Intern;