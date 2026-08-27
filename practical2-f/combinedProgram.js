let students = [
    {name : "Aman", marks: 85},
    {name : "Riya", marks: 72},
    {name : "Kabir", marks: 91},
    {name : "Sneha", marks: 65}
];

function geetTopper(list) {
    return list.reduce((top, current) =>
        current.marks > top.marks ? current : top);
}

function getAverage(list){
    let total = list.reduce((sum, s) => sum + s.marks, 0);
    return total / list.length;
}

let passedStudents = students.filter(s => s.marks >= 70);

console.log("All Students : ",students);
console.log("Passed Students (>=70) : ", passedStudents);
console.log("Topper : ", geetTopper);
console.log("Class Average : ", getAverage);