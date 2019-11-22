var todayDate = new Date();
var currentYear = todayDate.getFullYear();
var age;
var birthYear;

age = Number(prompt("Enter your age"));

console.log(todayDate);
console.log(currentYear);
console.log(age);

birthYear = currentYear - age;

document.getElementById("writeText").innerHTML = birthYear;
