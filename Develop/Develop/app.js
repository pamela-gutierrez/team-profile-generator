const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMember = [];

// Manager Prompts
const managerPrompts = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "teamManager",
                message: "What is your team manager's name?",
            },
            {

                type: "input",
                name: "managerId",
                message: "What is your team manager's id?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What's your team manager's office number?",
            },
            {
                type: "input",
                name: "email",
                message: "What's your team manager's email?",
            }
        ])

        .then(response => teamMember.push(new Manager(response.teamManager, response.managerId, response.officeNumber, response.email)))
        .then(() => teamRole())
        .catch((err) => console.error(err));
}

managerPrompts()

const teamRole = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "teamRole",
                choices: ["Engineer", "Intern", "The team is full!"],
                message: "What type of team member would you like to add?"
            }
        ]).then(response => {

            switch (response.teamRole) {
                case "Intern": internPrompts();
                    break;
                case "Engineer": engineerPrompts();
                    break;
                default: print();
            }
        });
}

// Intern Questions

const internPrompts = () => {

    inquirer
        .prompt([
            {
                type: "input",
                name: "teamIntern",
                message: "What is your team intern's name?",
            },
            {

                type: "input",
                name: "internId",
                message: "What is your team intern's id?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What's your team intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "Where did/does your intern go to school?"
            }
        ])

        .then(response => teamMember.push(new Intern(response.teamIntern, response.internId, response.internEmail, response.school)))
        .then(() => teamRole())
}

// Engineeer Questions
const engineerPrompts = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "teamEngineer",
                message: "What is your team engineer's name?",
            },
            {

                type: "input",
                name: "engineerId",
                message: "What is your team engineer's id?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What's your team engineer's email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's GitHub username?",
            }
        ])


        .then(response => teamMember.push(new Engineer(response.teamEngineer, response.engineerId, response.engineerEmail, response.github)))
        .then(() => teamRole())

}


const print = (response) => {
    render(teamMember);
    fs.writeFile(outputPath, render(teamMember), function (err) {
        if (err) {
            throw (err)
        }
    })
}




// Make sure the intern and engineer prompts match with the function that asks the question.
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
