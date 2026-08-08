//loopsTemplates.js
console.log("...For loop: Multiplication table of 5 ....");
for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5*i}`);    
}

console.log("....While loop: Countdown ....");
let count = 5;
while (count > 0){
    console.log(`Countdown ${count}`);
    count--;
}

let student = "Omkar";
let course = "MERN Stack";
console.log(`${student} is learning ${course} in Module: 1`);