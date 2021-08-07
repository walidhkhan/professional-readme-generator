const fs = require('fs');
const generateReadMe = require('./src/readme-template.js');
const readMeDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = readMeDataArgs;


fs.writeFile('./README.md', generateReadMe(name, github), err => {
    if (err) throw err;

    console.log('README complete! Check out README.md to see the output!')
});