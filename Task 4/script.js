function welcome() {
  console.log("Welcome to JavaScript");
}
welcome();

function studentDetails(name, age, cgpa) {
  console.log(name, age, cgpa);
}
studentDetails("Venkatesh", 20, 8.9);
studentDetails("Anil", 22, 7.8);

function calculateFee(fee) {
  return fee;
}
const studentFee = calculateFee(50000);
console.log(studentFee);

function discount(percent) {
  const baseFee = 200000;
  const finalFee = baseFee - (baseFee * percent) / 100;
  console.log(finalFee);
}
discount(10);

function studentForm(name, age, disability = "no") {
  console.log(name, age, disability);
}
studentForm("Venkatesh", 19, "yes");
studentForm("Anil", 21);
studentForm("Sunil", 23, "no");

function showMessage(msg) {
  console.log(msg);
}
showMessage("Hello World");

const printName = function (name) {
  console.log(name);
};
printName("Venkatesh");

const printNumber = (num) => console.log(num);
printNumber(42);

function testScope() {
  if (true) {
    var varScoped = "var inside";
    let letScoped = "let inside";
    const constScoped = "const inside";

    console.log(varScoped);
    console.log(letScoped);
    console.log(constScoped);
  }

  console.log(varScoped);
  try {
    console.log(letScoped);
  } catch (e) {
    console.log(e.message);
  }
  try {
    console.log(constScoped);
  } catch (e) {
    console.log(e.message);
  }
}
testScope();

function predictScope() {
  var a = 10;
  let b = 20;
  if (true) {
    var a = 30;
    let b = 40;
    console.log(a, b);
  }
  console.log(a, b);
}
predictScope();

function second() {
  console.log("Second executed");
}
function first(callback) {
  callback();
}
first(second);

function add(callback, a, b) {
  console.log(a + b);
  callback(a, b);
}

const sub = (num1, num2) => {
  console.log(num1 - num2);
};
add(sub, 10, 5);

function multiply(callback, a, b) {
  console.log(a * b);
  callback();
}
multiply(() => console.log("Done multiplying"), 4, 5);

function divide(num1, num2) {
  console.log(num1 / num2);
}
function executeMath(callback, a, b) {
  callback(a, b);
}
executeMath(divide, 20, 4);

function processStudent(callback) {
  const name = "Grace";
  callback(name);
}
processStudent((student) => console.log(student));

function* cashbackGenerator() {
  yield "10% cashback";
  yield "30% cashback";
  yield "Better luck next time";
}

const cbGen = cashbackGenerator();
console.log(cbGen.next());
console.log(cbGen.next());
console.log(cbGen.next());

function* discountGenerator() {
  yield "5% off";
  yield "10% off";
  yield "15% off";
  yield "20% off";
  yield "25% off";
}
for (const disc of discountGenerator()) {
  console.log(disc);
}

function* studentGenerator() {
  yield "Venkatesh";
  yield "Anil";
  yield "Sunil";
}
for (const student of studentGenerator()) {
  console.log(student);
}

function* fourValuesGen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
const fourGen = fourValuesGen();
console.log(fourGen.next());
console.log(fourGen.next());
console.log(fourGen.next());
console.log(fourGen.next());
console.log(fourGen.next().done);

function normalAdd(a, b, c) {
  console.log(a + b + c);
}
normalAdd(1, 2, 3);

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

curriedAdd(5)(10)(15);

function calculateOrderTotal(price) {
  return function (discountPercent) {
    return function (quantity) {
      const discountedUnit = price - (price * discountPercent) / 100;
      return discountedUnit * quantity;
    };
  };
}
console.log(calculateOrderTotal(100)(20)(5));

function multiplyThree(a, b, c) {
  return a * b * c;
}
function curriedMultiplyThree(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
const normalRes = multiplyThree(2, 3, 4);
const curriedRes = curriedMultiplyThree(2)(3)(4);
console.log(normalRes, curriedRes, normalRes === curriedRes);

(function (productName, discountPercent) {
  console.log(`Special Offer: Get ${discountPercent}% off on ${productName}!`);
})("Laptop", 15);

function getNumber() {
  return 100;
}
const myNum = getNumber();
console.log(myNum);

function getMarks(marks) {
  return marks;
}
const studentMarks = getMarks(95);
console.log(studentMarks);

function calculateFinalStudentFee(
  baseFee = 150000,
  discountCalculator = (fee) => fee * 0.1
) {
  const discountAmount = discountCalculator(baseFee);
  return baseFee - discountAmount;
}
const netFee = calculateFinalStudentFee(200000, (fee) => fee * 0.25);
console.log(netFee);