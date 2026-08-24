let employee = {
    id : 101,
    name: "Omkar Talekar",
    department: "I.T"
}

console.log("Orignal object:", employee);

employee.salary = 45000;

employee.department = "Software development";

console.log("Updated object: ", employee);

delete employee.id;

console.log("After deleting id:", employee);