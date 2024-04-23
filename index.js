//global variables calling inquirer, file system, and the code to generate SVG information
const inquirer = require("inquirer");
const fs = require('fs');
const { generateSVG } = require('./lib/shapes.js');

 //Creating a function to write the SVG file
function writeToSVG(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('SVG created!');
    })
    }
    
// Create a function to initialize the inquirer
function init() {
      //the Q&A for building the logo
    inquirer
        .prompt([
            {
                type: "input",
                message: "Give three characters for your logo.",
                name: "text",
                validate: (text) => {
                    return text.length <= 3 || "You exceeded three characters! Try again."
                }
            },
            {
                type: "input",
                message: "What color do you want to use for the text?",
                name: "textColor",
            },
            {
                type: "list",
                message: "What shape do you want to use?",
                name: "shape",
                choices: ["circle", "triangle", "square"],
            },
            {
                type: "input",
                message: "What color do you want to use for the shape?",
                name: "shapeColor",
            },
        ]).then((inquirerResponses) => {

            const { text, textColor, shape, shapeColor } = inquirerResponses;
            
            // Generate SVG string
            const svgData = generateSVG(inquirerResponses);

            // Write SVG data to file
            writeToSVG("./examples/logo.svg", svgData);
        });
    
}
    
// Function call to initialize app
init();