var x = 10;
var x = 20;
x = 30;
console.log(x);

let y = 40;
y = 50;
console.log(y);

const z = 60;
console.log(z);

let myName = "Daggu Venkatesh";
let myAge = 22;
let knowsProgramming = true;
console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(knowsProgramming, typeof knowsProgramming);

let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

let profile = {
    name: "Daggu Venkatesh",
    role: "Full Stack Developer",
    cgpa: 8.9
};
console.log(profile.name);
console.log(profile.role);
console.log(profile.cgpa);

let uName = prompt("Enter your name:");
let uAge = prompt("Enter your age:");
alert(uName);
console.log(uAge);

let num1 = 12;
let num2 = 4;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

let a1 = 5;
console.log(a1++);
console.log(a1);
console.log(++a1);

let a2 = 10;
let b2 = a2--;
let c2 = --a2;
console.log(a2);
console.log(b2);
console.log(c2);

let val = 20;
val += 5;
console.log(val);
val -= 3;
console.log(val);
val *= 2;
console.log(val);
val /= 4;
console.log(val);
val %= 5;
console.log(val);

console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");

let isAdult = true;
let hasID = false;
console.log(isAdult && hasID);
console.log(isAdult || hasID);
console.log(!isAdult);

let checkAge = 20;
console.log(checkAge >= 18 ? "Eligible" : "Not eligible");

console.log(typeof ("hello" + 10));
console.log(typeof (10 + true));
console.log(typeof (10 + null));
console.log(typeof ("hello" + undefined));

let inputNum = Number(prompt("Enter a number to add 10:"));
console.log(inputNum + 10);

console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(true));

let testNum = -5;
if (testNum > 0) {
    console.log("Positive");
} else {
    console.log("Not positive");
}

let hour = 14;
if (hour >= 4 && hour < 6) {
    console.log("Early morning");
} else if (hour >= 6 && hour < 12) {
    console.log("Morning");
} else if (hour >= 12 && hour < 17) {
    console.log("Afternoon");
} else if (hour >= 17 && hour < 21) {
    console.log("Evening");
} else {
    console.log("Night");
}

let candidateAge = 21;
let candidateHeight = 175;
let candidateWeight = 68;

if (candidateAge >= 18) {
    if (candidateHeight >= 160) {
        if (candidateWeight >= 50 && candidateWeight <= 90) {
            console.log("Eligible");
        } else {
            console.log("Ineligible: Weight out of range");
        }
    } else {
        console.log("Ineligible: Height below threshold");
    }
} else {
    console.log("Ineligible: Underage");
}

let lightColor = "yellow";
switch (lightColor.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Error: Invalid color");
}

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

let d = 1;
do {
    console.log(d);
    d++;
} while (d <= 10);

for (let char of "JavaScript") {
    console.log(char);
}

let students = ["Ramesh", "Suresh", "Rajesh", "Sneha", "Priya"];
for (let sName of students) {
    console.log(sName);
}

let student = {
    name: "Priya",
    role: "Full Stack Developer",
    cgpa: 9
};
for (let key in student) {
    console.log(key + ": " + student[key]);
}

let firstVal = Number(prompt("Enter first number for arithmetic:"));
let secondVal = Number(prompt("Enter second number for arithmetic:"));
console.log(firstVal + secondVal);
console.log(firstVal - secondVal);
console.log(firstVal * secondVal);
console.log(firstVal % secondVal);

let numbersList = [4, 15, 8, 23, 42];
for (let num of numbersList) {
    if (num > 10) {
        console.log(num);
    }
}

let voterAge = Number(prompt("Enter your age to check voting eligibility:"));
if (voterAge >= 18) {
    alert("You are eligible to vote.");
} else {
    alert("You are not eligible to vote.");
}

let choice = prompt("Select operation (1: Addition, 2: Subtraction, 3: Multiplication, 4: Division):");
let mNum1 = Number(prompt("Enter first number:"));
let mNum2 = Number(prompt("Enter second number:"));

switch (choice) {
    case "1":
    case "addition":
        alert(mNum1 + mNum2);
        break;
    case "2":
    case "subtraction":
        alert(mNum1 - mNum2);
        break;
    case "3":
    case "multiplication":
        alert(mNum1 * mNum2);
        break;
    case "4":
    case "division":
        alert(mNum2 !== 0 ? mNum1 / mNum2 : "Cannot divide by zero");
        break;
    default:
        alert("Invalid selection");
}