// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// --BELOW--
// import and require Employee class to extend
const Employee = require("./Employee");

// --BELOW--
// extend Employee class with Engineer specific constructors
class Engineer extends Employee {
    // 1st: declare Engineer's constructors. Be sure to include/follow pattern of Employee's arguments with Engineer specific one appended
    // From Engineer.test.js it expects "github"
    constructor (name, id, email, github) {
        // 2nd: use Employee's constructor with super()
        super (name, id, email);
        // 3rd: construct Engineer's specific argument
        this.github = github;
    }

    // --BELOW--
    // using specified methods from Engineer.test.js to return user data

    // have getRole() return Engineer
    getRole() {
        return "Engineer";
    }
    // have getGithub() return user github entry
    getGithub() {
        return this.github;
    }

}

// --BELOW--
// export Engineer class out of this file
module.exports = Engineer;