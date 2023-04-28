// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// --BELOW--
// importing and requiring Employee class
const Employee = require("./Employee");

// --BELOW--
// create constructor class of Intern while extending Employee
// Manager.test.js expects "officeNumber"
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // --BELOW--
    // pull in methods to return user data as specified in Intern.test.js
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

// --BELOW--
// export manager class constructor out of this file
module.exports = Manager;