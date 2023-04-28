// TODO: Write code to define and export the Employee class

// --BELOW--
// constructing Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // --BELOW--
    // using specified methods from Employee.test.js to return user data
    getName() {
        return this.name;
    }
    getId() {
        return this.id;

    }
    getEmail() {
        return this.email;

    }
    getRole() {
        return "Employee";

    }
}

// --BELOW--
// export Employee class from this file
module.exports = Employee;