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
module.exports = generateReadMe;