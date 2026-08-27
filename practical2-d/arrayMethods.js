let numbers = [10, 15, 20, 25, 30, 35, 40];

let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

let filtered = numbers.filter(n => n > 20);
console.log("Greater than 20 : ", filtered);

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all numbers:", sum);
