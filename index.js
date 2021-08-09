const inquirer = require('inquirer');
const promptUser = () => {
    return inquirer.prompt([
        // PROMPTS for...
        // github username
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
        }
    ])
}; 

const promptReadme = () => {
    console.log(`
====================
Generating README.md
====================
`);
    return inquirer.prompt([
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
            type: 'confirm',
            name: 'confirmInstructions',
            message: 'Would you like to enter instructions for installing your project?',
            default: true
          },
        {
            type: 'input',
            name: 'instructions',
            message: 'Enter the instructions to install your project:',
            when: ({confirmInstructions}) => confirmInstructions
        },
        // product usage info (optional)
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to enter the usage information for this project?',
            default: true
          },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter the usage information for your project:',
            when: ({confirmUsage}) => confirmUsage
        },
        // license type 
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license does this project contain?',
            choices: ['MIT', 'Other']
        },
        // contribution / collaborators (optional)
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to enter the contributing members for this project?',
            default: true
          },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter the contributing members for this project:',
            when: ({confirmContribution}) => confirmContribution
        },
        // test instructions (optional)
        {
            type: 'confirm',
            name: 'confirmTesting',
            message: 'Would you like to enter information related to project testing?',
            default: true
          },
        {
            type: 'input',
            name: 'testing',
            message: 'Please enter any information for this project:',
            when: ({confirmTesting}) => confirmTesting 
        },
    ]);
};

promptUser()
    .then(answers => console.log(answers))
    .then(promptReadme)
    .then(readmeAnswers => console.log(readmeAnswers));

// const fs = require('fs');
// const generateReadMe = require('./src/readme-template.js');

// const fileREADME = generateReadMe(name, github);


// fs.writeFile('./README.md', fileREADME, err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.md to see the output!')
// });