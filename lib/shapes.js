class Shape {
    constructor(data) {
        this.data = data;
    }
    render() {
        throw new Error('oh no you broke it :( you need to run one of the render functions below!');
    }
}

class Circle extends Shape {
    constructor(data) {
        super(data);
    }

    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" style="fill:${this.data.shapeColor}" />
            <text x="100" y="100" font-size="40px" text-anchor="middle" fill="${this.data.textColor}">${this.data.text}</text>
            </svg>`;
    }
}

class Square extends Shape {
    constructor(data) {
        super(data);
    }

    render() {
            return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="150" x="50" y="50" style="fill:${this.data.shapeColor}" />
            <text x="125" y="135" font-size="40px" text-anchor="middle" fill="${this.data.textColor}">${this.data.text}</text>
            </svg>`;
    }    
}

class Triangle extends Shape {
    constructor(data) {
        super(data);
    }

    render(){
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 180,190 20,190" style="fill:${this.data.shapeColor}" />
            <text x="100" y="175" font-size="40px" text-anchor="middle" fill="${this.data.textColor}">${this.data.text}</text>
            </svg>`;
    }
}

function generateSVG (data) {

    if(data.shape === "circle"){
        const circle = new Circle(data);
        return circle.render(data);
    } else if(data.shape === "square"){
        const square = new Square(data);
        return square.render(data);
    } else if (data.shape === "triangle"){
        const triangle = new Triangle(data);
        return triangle.render(data);
    }
}

module.exports = { Circle, Square, Triangle, generateSVG };