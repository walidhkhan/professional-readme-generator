const fs = require('fs');
const generateReadMe = require('./src/readme-template.js');
const path = require('path');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub username?',
        validate: githubUserInput => {
            if (githubUserInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // github repo
    {
        type: 'input',
        name: 'githubRepo',
        message: "Enter your project's GitHub repository link",
        validate: githubRepoInput => {
            if (githubRepoInput) {
                return true;
            } else {
                console.log('Please enter your GitHub repository link!');
                return false;
            }
        }
    },
    // email address
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    // project title (required)
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project (required)?',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log("Project name is required for README generation!");
                return false;
            }
        }
    },
    // project description (required)
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project (required):',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            } else {
                console.log("Project description is required for README generation!");
                return false;
            }
        }
    },
    // project installation instructions (optional)
    {
        type: 'input',
        name: 'instructions',
        message: 'Enter the instructions to install your project:',
    },
    // product usage info (optional)
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information for your project:',
    },
    // license type 
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does this project contain?',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'UNLICENSED']
    },
    // contribution / collaborators (optional)
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contributing members for this project:',
    },
    // test instructions (optional)
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter any testing information for this project:',
    },
]

function start(){
    inquirer.prompt(questions)
        .then(res => {
            console.log(res);
            writeToFile('README.md', generateReadMe(res));
        })
}

start();

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }










