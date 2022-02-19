'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10,10);
console.log(square.calcArea()); //100
const newRec = new Rectangle(30,10);
console.log(newRec.calcArea()); //300

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст ${this.text}, цвет: ${this.bgColor}`);
    }
}

// const square = new Rectangle(10,10);
// const long = new Rectangle(20,100);

// console.log(square.calcArea());
// console.log(long.calcArea());

const div = new ColoredRectangleWithText(25,10,'Hi bro', 'red');

div.showMyProps();
console.log(div.calcArea());
