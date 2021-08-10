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

## Description
${res.description}

## Installation
${res.instructions}

## Usage
${res.usage}

## License       
${renderBadge(res.license)}  
${res.license}

## Contributing
${res.contribution} 

## Tests
${res.testing}

## Questions
${res.email}

## About Me
GitHub: ${res.githubUser}
Email: ${res.email}
`;
};

function renderBadge(license) {
    if(license !=='UNLICENSED') {
    } return `![license](https://img.shields.io/badge/license-${license}-green.svg)`
}

// to allow 'generateReadMe' to be called from index.js
module.exports = generateReadMe;


