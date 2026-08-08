let principal = 10000;
let rate = 8;
let time = 2;

function calculateSimpleIntrest(p, r, t){
    return (p * r * t) / 100;
}

let intrest = calculateSimpleIntrest(principal, rate, time);
console.log("Principle:", principal);
console.log("Rate:", rate + " %");
console.log("Time:", time + " years");
console.log("Simple Intrest:", intrest);