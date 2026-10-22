// ==========================================
// Part 1: Array Manipulation Methods
// ==========================================

// 1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
fruits.push("Pineapple", "Strawberry", "Watermelon");
console.log("1.", fruits);

// 2. Create an array of 6 numbers. Remove the last element using pop() and print the result.
let numbersPop = [10, 20, 30, 40, 50, 60];
let removedLast = numbersPop.pop();
console.log("2. Removed:", removedLast, "| Array:", numbersPop);

// 3. Create an array of 5 names. Remove the first element using shift() and print the array.
let names = ["Venkatesh", "Anil", "Sunil", "Ramesh", "Suresh"];
names.shift();
console.log("3.", names);

// 4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().
let numbersUnshift = [30, 40, 50, 60];
numbersUnshift.unshift(10, 20);
console.log("4.", numbersUnshift);

// 5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
let arrSpliceRemove = [10, 20, 30, 40, 50];
arrSpliceRemove.splice(1, 2);
console.log("5.", arrSpliceRemove);

// 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
let arrSpliceReplace = [1, 2, 3, 4, 5];
arrSpliceReplace.splice(2, 1, 100);
console.log("6.", arrSpliceReplace);

// 7. Create an array of 5 numbers and use fill() to replace elements from index 2 to 4 with "hello".
let arrFill = [1, 2, 3, 4, 5];
arrFill.fill("hello", 2, 4);
console.log("7.", arrFill);


// ==========================================
// Part 2: Array Merge and Search Methods
// ==========================================

// 8. Create two arrays of numbers and combine them using concat().
let numsA = [1, 2, 3];
let numsB = [4, 5, 6];
let combinedConcat = numsA.concat(numsB);
console.log("8.", combinedConcat);

// 9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().
let arrSlice = [10, 20, 30, 40, 50, 60];
let sliced = arrSlice.slice(1, 4);
console.log("9.", sliced);

// 10. Create a nested array and convert it into a single-level array using flat(Infinity).
let deeplyNested = [1, [2, [3, [4, 5]], 6], 7];
let flattened = deeplyNested.flat(Infinity);
console.log("10.", flattened);

// 11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().
let arrIncludes = [10, 20, 30, 40, 50];
console.log("11. Exists:", arrIncludes.includes(30));

// 12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
let arrIndexOf = [5, 10, 15, 20, 25];
console.log("12. Index:", arrIndexOf.indexOf(20));

// 13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
let arrLastIndexOf = [1, 2, 3, 2, 1, 2];
console.log("13. Last Index:", arrLastIndexOf.lastIndexOf(2));

// 14. Create an array of numbers and arrange its elements using sort().
let unsortedNums = [40, 100, 1, 5, 25, 10];
unsortedNums.sort((a, b) => a - b);
console.log("14.", unsortedNums);

// 15. Create an array of 7 numbers and reverse the order using reverse().
let numbersReverse = [1, 2, 3, 4, 5, 6, 7];
numbersReverse.reverse();
console.log("15.", numbersReverse);


// ==========================================
// Part 3: Spread and Rest Operators
// ==========================================

// 16. Create two arrays containing 4 numbers each. Merge them using spread.
let firstFour = [10, 20, 30, 40];
let secondFour = [50, 60, 70, 80];
let mergedWithSpread = [...firstFour, ...secondFour];
console.log("16.", mergedWithSpread);

// 17. Merge student details and job details objects using spread.
let studentInfo = { name: "Anil", age: 22, studentId: "ST1024" };
let jobInfo = { title: "Frontend Developer", company: "TechCorp", location: "Hyderabad" };
let mergedObject = { ...studentInfo, ...jobInfo };
console.log("17.", mergedObject);

// 18. Function accepting two parameters and collecting remaining args into an array using rest.
function collectRemaining(param1, param2, ...remaining) {
  console.log("18. P1:", param1, "| P2:", param2, "| Remaining:", remaining);
}
collectRemaining("First", "Second", "Third", "Fourth", "Fifth");

// 19. Write function one(a, b, ...c) that prints sum of a, b, c[0], and c[1].
function one(a, b, ...c) {
  let sum = a + b + c[0] + c[1];
  console.log("19. Sum:", sum);
}
one(5, 10, 15, 20, 25, 30);

// 20. Copy all elements from the first array into a new array using spread.
let sourceArray = [100, 200, 300];
let copiedArray = [...sourceArray];
console.log("20.", copiedArray);


// ==========================================
// Part 4: Array Destructuring
// ==========================================

// 21. Given let arr = [10, 20, 30, 40], extract all values into separate variables.
let arrDestruct = [10, 20, 30, 40];
let [val1, val2, val3, val4] = arrDestruct;
console.log("21.", val1, val2, val3, val4);

// 22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract 1 through 6 using nested destructuring.
let nested = [1, 2, [3, 4, [5, 6]]];
let [n1, n2, [n3, n4, [n5, n6]]] = nested;
console.log("22.", n1, n2, n3, n4, n5, n6);

// 23. Array with name, age, CGPA. Extract and print using destructuring.
let studentProfile = ["Sunil", 21, 9.2];
let [studentName, studentAge, studentCGPA] = studentProfile;
console.log("23.", studentName, studentAge, studentCGPA);


// ==========================================
// Part 5: Object Destructuring
// ==========================================

// 24. Object with name, role, location. Extract using object destructuring.
let developer = { name: "Venkatesh", role: "Full Stack Dev", location: "Bengaluru" };
let { name: devName, role: devRole, location: devLocation } = developer;
console.log("24.", devName, devRole, devLocation);

// 25. Object with nested address (city, state). Extract city and state.
let studentWithAddress = {
  name: "Sneha",
  address: { city: "Pune", state: "Maharashtra" }
};
let { address: { city, state } } = studentWithAddress;
console.log("25.", city, state);

// 26. Object with name, role, location: { mainLocation, currentLocation }. Print all four.
let employeeLocations = {
  name: "Vikram",
  role: "DevOps Engineer",
  location: { mainLocation: "Mumbai", currentLocation: "Hyderabad" }
};
let {
  name: empName,
  role: empRole,
  location: { mainLocation, currentLocation }
} = employeeLocations;
console.log("26.", empName, empRole, mainLocation, currentLocation);


// ==========================================
// Part 6: Mixed Practical Challenges
// ==========================================

// 27. Array of 10 numbers: remove first/last, add two at start, print final array.
let tenNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
tenNumbers.shift();
tenNumbers.pop();
tenNumbers.unshift(1, 5);
console.log("27.", tenNumbers);

// 28. Array with duplicates: check includes(), indexOf(), and lastIndexOf().
let duplicateNumbers = [12, 45, 67, 45, 89, 45, 90];
let target = 45;
console.log("28. Target:", target, "| includes:", duplicateNumbers.includes(target), "| indexOf:", duplicateNumbers.indexOf(target), "| lastIndexOf:", duplicateNumbers.lastIndexOf(target));

// 29. Two employee objects: merge with spread, destructure and print name and role.
let personalData = { empId: "EMP2026", name: "Mahesh Babu", department: "Engineering" };
let professionalData = { role: "Cloud Architect", experienceYears: 7 };
let fullEmployee = { ...personalData, ...professionalData };
let { name: finalEmpName, role: finalEmpRole } = fullEmployee;
console.log("29. Name:", finalEmpName, "| Role:", finalEmpRole);

// 30. Flatten nested array with flat(Infinity), reverse, and print.
let rawNestedArray = [1, [2, 3], [4, [5, [6, 7]], 8], 9, [10]];
let flattenedReversed = rawNestedArray.flat(Infinity).reverse();
console.log("30.", flattenedReversed);