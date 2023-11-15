const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shape.js");
// const path = require("path");

const questions = [
    {
        type: "input",
        message: "Name your logo, use up to three characters.",
        name: "text"
    }, {
        type: "input",
        message: "Choose your text color, please enter a keyword or hexadecimal number.",
        name: "color"
    }, {
        type: "list",
        message: "What shape would you like your logo to be?",
        choices: [
           "Square",
           "Circle",
           "Triangle"
        ],
        name: "shape"
    }, {
        type: "input",
        message: "Choose your background color, please enter a keyword or hexadecimal number.",
        name: "bgColor"
    },
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("README.md File Loading...");
        writeToFile("./logo.svg", ({...responses}));
    });
}
init();