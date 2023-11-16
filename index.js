const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shape");
const path = require("path");

class Svg {
    constructor() {
        this.textElement = " ";
        this.shapeElement = " ";
    }

    render(questions) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="${questions.bgColor}">
        ${this.shapeElement}${this.textElement}
        </svg>`;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="65" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}


const questions = [
    {
        type: "input",
        message: "Name your logo, use up to three characters.",
        name: "text"
    },
    {
        type: "input",
        message: "Choose your text color, please enter a keyword or hexadecimal number.",
        name: "color"
    },
    {
        type: "list",
        message: "What shape would you like your logo to be?",
        choices: [
        { name: "Circle", value: Circle },
        { name: "Square", value: Square },
        { name: "Triangle", value: Triangle },
        ],
        name: "shape"
    },
    {
        type: "input",
        message: "Choose your background color, please enter a keyword or hexadecimal number.",
        name: "bgColor"
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    const svgInstance = new Svg();
    inquirer.prompt(questions).then((responses) => {
        svgInstance.setTextElement(responses.text, responses.color);

        const selectedShapeClass = responses.shape;
        const selectedShapeInstance = new selectedShapeClass();

        svgInstance.setShapeElement(selectedShapeInstance);

        const svgData = svgInstance.render(responses);
        writeToFile("./Logo.svg", svgData);
    });
}

init();


