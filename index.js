// --BELOW--
// require inquirer and file structure usage
const inquirer = require("inquirer");
const fs = require("fs");

// --BELOW--
// require the HTML generator
const generateHTML = require("./util/generateHtml");

// --BELOW--
// require each employee type's class is pulled into this file
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// --BELOW--
// declare empty array to hold generated data
const teamArray = [];


// --BELOW--
// time to create the team! Manager first:
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Who is managing this team?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter manager's email:"
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is their office phone number?"
        }
        // --BELOW--
        // with user answers: create new instance of Manager and push it to the empty teamArray
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
        teamArray.push(manager);
        // --BELOW--
        // Call function to add the manager's team!
        addTeamMembers();
    })
}

// --BELOW--
// first function to call. Begin team builder with manager info
addManager();


// --BELOW--
// 
