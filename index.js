// Include package needed
const inquirer = require("inquirer");
const fs = require("fs");

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
              userAnswers.githubUsername
            );
            team.push(engineer);
            console.log("This engineer had been added");
          })
        } else if (userAnswers.role === 'Intern') {
          inquirer.prompt(internQ).then((userAnswers) => {
            const intern = new Intern(
              userAnswers.internSchool
            );
            team.push(intern);
            console.log("This intern had been added");
          })
        }
      })




      }); // Call the function that creates the HMTL
  }
  // Call the manager function
  manager();
}



// Function that creates the HTML
const generateHTML = (userAnswers) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>

    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <h4 class="card-text">${userAnswers.managersName}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${userAnswers.managersId}</li>
      <li class="list-group-item">${userAnswers.managersEmail}</li>
      <li class="list-group-item">${userAnswers.officeNumber}</li>
    </ul>
    </div>s
  </div>

  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <h4 class="card-text">${userAnswers.engineerName}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${userAnswers.engineerId}</li>
    <li class="list-group-item">${userAnswers.engineerEmail}</li>
    <li class="list-group-item">${userAnswers.githubUsername}</li>
  </ul>
  </div>s
</div>

<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Intern</h5>
  <h4 class="card-text">${userAnswers.internName}</h4>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${userAnswers.internId}</li>
  <li class="list-group-item">${userAnswers.internEmail}</li>
  <li class="list-group-item">${userAnswers.internSchool}</li>
</ul>
</div>s
</div>

</div>
</body>
</html>`;

// Function call to initializa app
init();
