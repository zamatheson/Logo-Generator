import {Circle, Square, Triangle } from './shape.js';

describe('Shape', () => {

    test("Circle Testing...", () => {
        const circle = new Circle(0, 0, 50);
        const expected = '<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0"/>'
        expected(circle.render()).toBe(expected);
    });

    test("Square Testing...", () => {
        const square = new Square(0, 0, 100);
        const expected = '<rect x="50" height="200" width="200"/>'
        expected(square.render()).toBe(expected);
    });

    test("Triangle Testing...", () => {
        const triangle = new Triangle(0, 0, 100);
        const expected = '<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0"/>'
        expected(triangle.render()).toBe(expected);
    });

});
