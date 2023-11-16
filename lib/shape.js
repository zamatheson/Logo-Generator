class Shape {
    constructor(){
        this.color = ' ';
    }
    setColor(bgColor){
        this.color = `${bgColor}`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%"/>` 
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0"/>`
    }
};

module.exports = {Circle, Square, Triangle}