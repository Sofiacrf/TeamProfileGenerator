// Include package needed
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");

// Require all the classes files
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const team = [];
const managersId = [];


// Engineer questions
const engineerQ = [
  {
    type: 'input',
    name: 'engineerName',
    message: 'What´s the employee´s name?',
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: 'What´s the employee´s email?',
  },
  {
    type: 'input',
    name: 'engineerId',
    message: 'What´s the employee´s ID?'
  },
  {
  type: 'input',
  name: 'gitHub',
  message: 'What´s the engineer gitHub username?'
},
];

// Intern questions
const internQ = [
  {
    type: 'input',
    name: 'internName',
    message: 'What´s the employee´s name?',
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'What´s the employee´s email?',
  },
  {
    type: 'input',
    name: 'internId',
    message: 'What´s the employee´s ID?'
  },
  {
  type: 'input',
  name: 'school',
  message: 'What´s the intern school?'
}]

// Create a function to prompt the questions
function init() {
  function manager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managersName",
          message: "What is the manager´s name?",
          validate: (userInput) => {
            if (userInput !== "") {
              return true;
            }
            return "Please enter a name";
          },
        },
        {
          type: "input",
          name: "managersId",
          message: "What is the manager´s id?",
        },
        {
          type: "input",
          name: "managersEmail",
          message: "What is the manager´s email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager´s office number?",
        },
      ])
      .then((userAnswers) => {
        const manager = new Manager(
          userAnswers.managersName,
          userAnswers.managersId,
          userAnswers.managersEmail,
          userAnswers.officeNumber
        );
        team.push(manager);
        managersId.push(userAnswers.managersId);
        console.log("This is been added");
        // This is where I would run the function to create the team
      inquirer.prompt([
        {
          type: 'list',
          name: 'role',
          message: 'Choose the type of employee you want to add',
          choices: ['Engineer', 'Intern'],
        } 
      ]).then(function(userAnswers){
        if (userAnswers.role === 'Engineer') {
          inquirer.prompt(engineerQ).then((userAnswers) => {
            const engineer = new Engineer(
              userAnswers.engineerName,
              userAnswers.engineerEmail,
              userAnswers.engineerId,
              userAnswers.githubUsername
            );
            team.push(engineer);
            console.log("This engineer had been added");
          })
        } else if (userAnswers.role === 'Intern') {
          inquirer.prompt(internQ).then((userAnswers) => {
            const intern = new Intern(
              userAnswers.internName,
              userAnswers.internEmail,
              userAnswers.internId,
              userAnswers.internSchool
            );
            team.push(intern);
            console.log("This intern had been added");
          })
        }
      })
      }); 
  }
  // Call the manager function
  manager();
}

// Function call to initializa app
init();