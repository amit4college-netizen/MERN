//operators.js
let marks = 72;

//if-else control statements
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >=75) {
    console.log("Grade: A");    
}else if (marks >= 60) {
    console.log("Grade: B");
}else{
    console.log("Grade: C");
}
    
//logical operators
let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
    console.log("Eligible to vote.");
}

//switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        break;
}