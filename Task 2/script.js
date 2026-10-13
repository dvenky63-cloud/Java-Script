var num1 = 10;
num1 = 20;
console.log(num1);

var num2 = 30;
var num2 = 50;
console.log(num2);

let num3 = 100;
num3 = 200;
console.log(num3);

const age = 25;
console.log(age);

console.log("var a = 1; (valid)");
console.log("let b = 2; (valid)");
console.log("const c = 3; (valid)");
console.log("const d; (invalid - missing initializer)");
console.log("let b = 4; in same scope (invalid - redeclaration)");

var myName = "Daggu Venkatesh";
let myAge = 25;
const myCity = "Hyderabad";
console.log(myName, myAge, myCity);

let userName = prompt("Enter your name:");
alert(userName);

let userAge = prompt("Enter your age:");
console.log(userAge);

let knowsJS = confirm("Do you know JavaScript?");
console.log(knowsJS);

let strVal = "Hello";
let numVal = 42;
let boolVal = true;
let undefVal;
console.log(strVal, typeof strVal);
console.log(numVal, typeof numVal);
console.log(boolVal, typeof boolVal);
console.log(undefVal, typeof undefVal);

let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

let store = {
  fruits: ["Apple", "Orange"],
  electronics: ["Laptop", "Phone", "Tablet"],
  vegetable: "Carrot"
};
console.log(store.fruits);
console.log(store.electronics);
console.log(store.vegetable);

let n1 = 15;
let n2 = 4;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);

console.log(27 % 5);

console.log(3 ** 4);

let preIncVal = 10;
console.log(++preIncVal);

let preDecVal = 10;
console.log(--preDecVal);

let x = 5;
let y = x++;
console.log(x);
console.log(y);

let a19 = 4;
console.log(a19++);
console.log(a19);

let a20 = 4;
console.log(++a20);
console.log(a20);

let a21 = 8;
let b21 = a21++;
console.log(a21);
console.log(b21);

let a22 = 8;
let b22 = ++a22;
console.log(a22);
console.log(b22);

let a23 = 6;
let b23 = a23--;
console.log(a23);
console.log(b23);

let a24 = 6;
let b24 = --a24;
console.log(a24);
console.log(b24);

let a25 = 2;
a25++;
a25++;
console.log(a25);

let a26 = 10;
--a26;
--a26;
console.log(a26);

let b27 = 3;
b27 = b27++;
console.log(b27);

let c28 = 4;
let d28 = c28++;
console.log("c:", c28);
console.log("d:", d28);

let e29 = 5;
let f29 = --e29;
console.log("e:", e29);
console.log("f:", f29);

let a30 = 5;
let b30 = a30++;
let c30 = ++a30;
console.log(a30);
console.log(b30);
console.log(c30);