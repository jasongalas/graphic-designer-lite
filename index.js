//global variables calling inquirer, file system, and the code to generate SVG information
const inquirer = require("inquirer");
const fs = require('fs');
const generateSVG = require('./lib/shapes.js');

 //Creating a function to write the SVG file
function writeToSVG(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('SVG created!');
    })
    }
    
// Create a function to initialize app
function init() {
      //the Q&A for building the logo
    inquirer
        .prompt([
            {
                type: "input",
                message: "Give three characters for your logo.",
                name: "text",
            },
            {
                type: "list",
                message: "What color do you want to use for the text?",
                name: "textColor",
                choices: ["black", "white", "red", "blue", "green", "yellow"],
            },
            {
                type: "list",
                message: "What shape do you want to use?",
                name: "shape",
                choices: ["circle", "triangle", "square"],
            },
            {
                type: "list",
                message: "What color do you want to use for the shape?",
                name: "shapeColor",
                choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
            },
        ]).then((inquirerResponses) => {
            writeToSVG("./examples/logo.svg", generateSVG({...inquirerResponses}))
        })
    }
    
// Function call to initialize app
init();