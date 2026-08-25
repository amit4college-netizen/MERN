function greetuser (name, course) {
    console.log(`Hello ${name}, welcome to ${course} !`);
}

function calculateArea(length, breadth){
    return length * breadth;
}

greetuser("Omkar", "MERN stack development");
console.log("Area of rectangle: ", calculateArea(8, 5));
