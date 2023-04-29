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
// first function to call. Team builder begins with manager's info
addManager();


// --BELOW--
// function to choose which team member will be added next. If none, can generate HTML
function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            name: "addPrompt",
            message: "Choose employee type:",
            choices: ["Engineer", "Intern", "Manager", "None. I'm done."]
        }
        // "switch" keyword is looking for which choice user made from addPrompt above.
        // each "case" was a possible answer from above
        // when it finds a case that matches the addPrompt, it runs the function underneath
        // must break once a case matches, otherwise it will keep searching for matching cases
        // final "case" becomes "default": default is a catch all to execute if no case matches user choice
    ]).then(choice => {
        switch (choice.addPrompt) {

            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            case "Manager":
                addManager();
                break;

            default:
                outputHTML();
                // --ABOVE: time to create the output for HTML
        }
    })
}


function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter engineer's name:"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter engineer's email:"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter engineer's GitHub username:"
        }
        // --BELOW--
        // with user answers: create new instance of Engineer and push it to the empty teamArray
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        // --BELOW--
        // Call function to add engineer to the team
        addTeamMembers();
    })
}


function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter intern's name:"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter intern's email:"
        },
        {
            type: "input",
            name: "internGithub",
            message: "Enter intern's GitHub username:"
        }
        // --BELOW--
        // with user answers: create new instance of Engineer and push it to the empty teamArray
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub);
        teamArray.push(intern);
        // --BELOW--
        // Call function to add intern to the team
        addTeamMembers();
    })
}


// --BELOW--
// creating a function that outputs a write file named index.html, then passing in the teamArray data
// call node index.js in integrated terminal to launch app, then open a browser from index.html
function outputHTML() {
    console.log("Generated HTML");

    fs.writeFile("index.html", generateHTML(teamArray), err => {
        if(err){
            console.log(err);
        } else {
            console.log("Go check your browser!");
        }
    })
}
