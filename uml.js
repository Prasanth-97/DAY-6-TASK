
// UML diagram using class constructor method

class Cirlce {
    constructor(radius,colour){   //constructor
     
    this.radius = radius.toFixed(1) ;
    this.colour = colour ;
    }
// getting radius of circle using getter

get circleRadius() {
    return this.radius ;
 };

 //setting radius of the circle to 2.0

set circleRadius(radius){
    return this.radius = radius.toFixed(1) ;
};

//getting colour of the circle using getter

get circleColour(){
    return this.colour ;
};

// setting color of the circle to orange

set circleColour(colour){
    return this.colour = colour ;
};

//toString

tostring(){
    return `"Circle [radius = ${this.radius},Color = ${this.colour}]"`
};

// getting area of the circle

get area() {
     return Math.PI * this.radius * this.radius ; // radius = 2.0
};

// getting circumference of the circle

get circumference() {
    return 2 * Math.PI * this.radius // radius = 2.0
};
};

const circleParameters = new Cirlce (1.0,"Red");

console.log("radius of the circle : ",circleParameters.radius);
console.log("colour of the circle : ",circleParameters.colour);
console.log("radius of the circle using getter : ",circleParameters.circleRadius);
//setting new value to radius
circleParameters.circleRadius = 2.0;
console.log("setting new value for radius : ",circleParameters.circleRadius);
console.log("colour of the circle using getter :",circleParameters.circleColour);
//setting new colour to circle
circleParameters.circleColour = "Orange";
console.log("setting new colour to circle : ",circleParameters.circleColour);
//tostring
console.log(circleParameters.tostring());
//Area
console.log("Area of the circle : ",circleParameters.area.toFixed(1));
//circumference
console.log("circumference of the circle : ",circleParameters.circumference.toFixed(1));






