const generateReadMe = (name, github) => {
return `
# Project title

## Description

## Table of Contents

## Installation
${github}

## Usage

## License       

## Contributing
${name} 

## Tests

## Questions
`;
};

// to allow 'generateReadMe' to be called from index.js
// module.exports = generateReadMe;
module.exports = templateData => {
    console.log(templateData);
    // destructure from templateData based on their property key names
    const { readmeToc, readme, ...header } = templateData;
return `
# Project title ${header.githubUsername}
Project repository: ${header.repo}

# Description
${readme.description}

# Table of Contents

# Installation
${readme.installation}

# Usage
${readme.usage}

# License       
${readme.license}

# Contributing
${readme.contributing} 

# Tests
${readme.tests}

# Questions
For any further questions or concerns regarding the project, please contact ${header.email}.
`;    
}