const { Circle, Square, Triangle } = require('./shapes.js');

// Test cases for Circle class
it('should render the circle SVG with "LOL" in black on a red circle', () => {
    const circleData = {
        shapeColor: "red",
        textColor: "black",
        text: "LOL"
    };

    const circle = new Circle(circleData);
    expect(circle.render()).toEqual(`<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" style="fill:red" />
            <text x="100" y="100" font-size="40px" text-anchor="middle" fill="black">LOL</text>
            </svg>`);
});

// Test cases for Square class
it('should render square SVG with "OMG" in white on a blue square', () => {
    const squareData = {
        shapeColor: "blue",
        textColor: "white",
        text: "OMG"
    };

    const square = new Square(squareData);
    expect(square.render()).toEqual(`<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="150" x="50" y="50" style="fill:blue" />
            <text x="125" y="135" font-size="40px" text-anchor="middle" fill="white">OMG</text>
            </svg>`);
});

// Test cases for Triangle class
it('should render triangle SVG with "BRB" in green on a yellow triangle', () => {
    const triangleData = {
        shapeColor:"yellow",
        textColor: "green",
        text: "BRB"
    };
    
    const triangle = new Triangle(triangleData);
    expect(triangle.render()).toEqual(`<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 180,190 20,190" style="fill:yellow" />
            <text x="100" y="175" font-size="40px" text-anchor="middle" fill="green">BRB</text>
            </svg>`);
});