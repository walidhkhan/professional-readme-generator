const generateReadMe = (name, github) => {
    return `
# README

## Website
https://${github}.github.io/run-buddy/

## Contribution
Made with ❤️ by ${name} 
    `;
};

// to allow 'generateReadMe' to be called from index.js
module.exports = generateReadMe;