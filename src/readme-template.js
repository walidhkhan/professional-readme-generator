const generateReadMe = (res) => {
return `
# ${res.projectName}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

<div id='Desciption'/>

## Description
${res.description}

<div id='Installation'/>

## Installation
${res.instructions}

<div id='Usage'/>

## Usage
${res.usage}

<div id='License'/>

## License       
${res.license}  
${renderBadge(res.license)}

<div id='Contributing'/>

## Contributing
${res.contribution} 

<div id='Tests'/>

## Tests
${res.testing}

<div id='Questions'/>

## Questions
For additional questions or concerns regarding this project, please contact the information below:

**Contact information**  
GitHub: github.com/${res.githubUser}  
Email: ${res.email}
`;
};

function renderBadge(license) {
    if(license !=='UNLICENSED') {
    } return `![license](https://img.shields.io/badge/license-${license}-green.svg)`
}

// to allow 'generateReadMe' to be called from index.js
module.exports = generateReadMe;


