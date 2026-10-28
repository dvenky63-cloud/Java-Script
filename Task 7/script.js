// ==========================================
// Part 1: Array Higher-Order Methods
// ==========================================

console.group("--- Part 1: Array Higher-Order Methods ---");

// 1. forEach() to print each number
const numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Task 1: Printing numbers using forEach():");
numbers1.forEach((num) => console.log(num));

// 2. map() to multiply every number by 5
const numbers2 = [2, 4, 6, 8, 10];
const multipliedByFive = numbers2.map((num) => num * 5);
console.log("Task 2: Multiplied by 5:", multipliedByFive);

// 3. filter() to get numbers greater than 20
const numbers3 = [5, 12, 20, 25, 45, 18, 99];
const greaterThanTwenty = numbers3.filter((num) => num > 20);
console.log("Task 3: Numbers > 20:", greaterThanTwenty);

// 4. filter() employees whose salary is <= 300,000
const employees = [
  { name: "Venkatesh", salary: 180000 },
  { name: "Anil", salary: 300000 },
  { name: "Sunil", salary: 450000 },
  { name: "Ramesh", salary: 220000 }
];
const lowSalaryEmployees = employees.filter((emp) => emp.salary <= 300000);
console.log("Task 4: Employees with salary <= ₹300,000:", lowSalaryEmployees);

// 5. find() first employee whose salary is > 200,000
const firstHighEarner = employees.find((emp) => emp.salary > 200000);
console.log("Task 5: First employee with salary > ₹200,000:", firstHighEarner);

// 6. reduce() to calculate total of all numbers
const numbers6 = [10, 25, 15, 50];
const totalSum = numbers6.reduce((accumulator, current) => accumulator + current, 0);
console.log("Task 6: Sum of numbers:", totalSum);

// 7. some() to check if at least one number is even
const numbers7 = [1, 3, 5, 8, 9];
const hasEven = numbers7.some((num) => num % 2 === 0);
console.log("Task 7: Has at least one even number:", hasEven);

// 8. every() to check if all numbers are > 0
const numbers8 = [1, 5, 23, 4, 18];
const allPositive = numbers8.every((num) => num > 0);
console.log("Task 8: All numbers are greater than 0:", allPositive);

// 9. sort() ascending order
const numbers9 = [45, 12, 85, 32, 7];
const ascending = [...numbers9].sort((a, b) => a - b);
console.log("Task 9: Ascending sort:", ascending);

// 10. sort() descending order
const numbers10 = [45, 12, 85, 32, 7];
const descending = [...numbers10].sort((a, b) => b - a);
console.log("Task 10: Descending sort:", descending);

console.groupEnd();


// ==========================================
// Part 2: String Methods
// ==========================================

console.group("--- Part 2: String Methods ---");

// 11. charAt() index 4
const str11 = "javascript";
console.log("Task 11: Character at index 4:", str11.charAt(4));

// 12. charCodeAt() index 2
console.log("Task 12: Character code at index 2:", str11.charCodeAt(2));

// 13. trim()
const spacedStr = "   Hello World!   ";
console.log("Task 13: Trimmed string:", `"${spacedStr.trim()}"`);

// 14. toUpperCase() and toLowerCase()
const sampleText = "Full Stack Development";
console.log("Task 14: Uppercase:", sampleText.toUpperCase());
console.log("Task 14: Lowercase:", sampleText.toLowerCase());

// 15. includes()
const checkScript = "Learn javascript today";
console.log("Task 15: Contains 'script':", checkScript.includes("script"));

// 16. startsWith() and endsWith()
const title = "JavaScript";
console.log("Task 16: Starts with 'Java':", title.startsWith("Java"));
console.log("Task 16: Ends with 'Script':", title.endsWith("Script"));

// 17. replaceAll()
const repetitiveText = "java is versatile, java is powerful";
console.log("Task 17: Replace all 'java' with 'python':", repetitiveText.replaceAll("java", "python"));

// 18. split()
const techStack = "html-css-javascript-react";
const techArray = techStack.split("-");
console.log("Task 18: Split array:", techArray);

// 19. join()
const namesList = ["Venkatesh", "Anil", "Sunil", "Ramesh"];
console.log("Task 19: Joined names:", namesList.join(", "));

// 20. slice()
const phrase = "Frontend Engineering";
console.log("Task 20: Sliced portion (0 to 8):", phrase.slice(0, 8));

console.groupEnd();


// ==========================================
// Part 3: Date Methods
// ==========================================

console.group("--- Part 3: Date Methods ---");

// 21. Year, month, date, and day
const now = new Date();
console.log("Task 21: Current Year:", now.getFullYear());
console.log("Task 21: Current Month (0-indexed):", now.getMonth());
console.log("Task 21: Current Date:", now.getDate());
console.log("Task 21: Current Day (0=Sun, 6=Sat):", now.getDay());

// 22. Month name array lookup
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
console.log("Task 22: Current Month Name:", monthNames[now.getMonth()]);

// 23. Hours, minutes, seconds
console.log("Task 23: Current Time:", `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

// 24. Date setters
const customDate = new Date();
customDate.setFullYear(2003);
customDate.setMonth(0); // 0 = January
customDate.setDate(30);
console.log("Task 24: Modified Date (2003-01-30):", customDate.toDateString());

console.groupEnd();


// ==========================================
// Part 4: Asynchronous JavaScript
// ==========================================

console.group("--- Part 4: Asynchronous JavaScript ---");

// 25. setTimeout() 3 seconds
setTimeout(() => {
  console.log("Task 25: Welcome to JavaScript (after 3 seconds)");
}, 3000);

// 26 & 27. setInterval() every 2s, stopped after 8s
const intervalId = setInterval(() => {
  console.log("Task 26: Learning JavaScript");
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Task 27: Interval stopped using clearInterval() after 8 seconds");
}, 8000);

// 28. Execution order observation
function one() {
  console.log("Task 28: Function One");
}
function two() {
  console.log("Task 28: Function Two");
}
function three() {
  console.log("Task 28: Function Three");
}

one();
setTimeout(two, 0); // Queued to macro-task queue; executes after synchronous stack clears
three();

console.groupEnd();


// ==========================================
// Part 5: Promises and API Fetching
// ==========================================

console.group("--- Part 5: Promises & API Fetching ---");

// 29. Resolved Promise
const loginPromise = new Promise((resolve) => {
  resolve("Login successful");
});
loginPromise.then((msg) => console.log("Task 29:", msg));

// 30. Rejected Promise
const errorPromise = new Promise((_, reject) => {
  reject("Invalid password");
});
errorPromise.catch((err) => console.log("Task 30:", err));

// 31. Promise with .finally()
const demoPromise = new Promise((resolve) => {
  resolve("Action executed");
});
demoPromise
  .then((res) => console.log("Task 31 Response:", res))
  .finally(() => console.log("Task 31: Process completed"));

// 32. Fetch titles using forEach()
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    console.log("Task 32: Product Titles:");
    products.forEach((item) => console.log(`- ${item.title}`));
  })
  .catch((err) => console.error("Task 32 Error:", err));

// 33. Fetch title, price, category
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    console.log("Task 33: Product Details (first 3 shown):");
    products.slice(0, 3).forEach((item) => {
      console.log(`Title: ${item.title} | Price: $${item.price} | Category: ${item.category}`);
    });
  })
  .catch((err) => console.error("Task 33 Error:", err));

// 34 & 35. Fetch error handling and finally block
fetch("https://fakestoreapi.com/invalid-endpoint")
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    console.warn("Task 34 (Expected Error Handled):", error.message);
  })
  .finally(() => {
    console.log("Task 35: API call completed");
  });

console.groupEnd();


// ==========================================
// Part 6: Real-Time Mini Tasks
// ==========================================

console.group("--- Part 6: Real-Time Mini Tasks ---");

// 36. Employee salary report
const companyStaff = [
  { name: "Vikram", salary: 250000 },
  { name: "Ananya", salary: 420000 },
  { name: "Suresh", salary: 290000 },
  { name: "Meera", salary: 310000 }
];

console.log("Task 36: Salary Report (< ₹300,000):");
companyStaff
  .filter((emp) => emp.salary < 300000)
  .forEach((emp) => console.log(`Name: ${emp.name}, Salary: ₹${emp.salary}`));

// 37. Product price calculator (titles and prices array)
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    const titleAndPriceList = products.map((item) => ({
      title: item.title,
      price: item.price
    }));
    console.log("Task 37: Extracted Titles & Prices (first 3):", titleAndPriceList.slice(0, 3));
  })
  .catch((err) => console.error("Task 37 Error:", err));

// 38. Product search by category
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    const selectedCategory = "jewelery";
    const filteredProducts = products.filter((item) => item.category === selectedCategory);
    console.log(`Task 38: Filtered by category "${selectedCategory}":`, filteredProducts);
  })
  .catch((err) => console.error("Task 38 Error:", err));

// 39. Number analysis
const dataset = [3, 8, 15, 22, 35, 40, 11];

const doubled = dataset.map((n) => n * 2);
const evens = dataset.filter((n) => n % 2 === 0);
const sum = dataset.reduce((acc, curr) => acc + curr, 0);
const hasGreaterThanFifty = dataset.some((n) => n > 50);
const allUnderHundred = dataset.every((n) => n < 100);

console.log("Task 39: Number Analysis:", {
  original: dataset,
  doubled,
  evens,
  sum,
  hasGreaterThanFifty,
  allUnderHundred
});

// 40. Product listing with catch and finally
fetch("https://fakestoreapi.com/products")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch product list");
    return res.json();
  })
  .then((data) => {
    console.log("Task 40: Product Listing Completed (sample of 2):");
    data.slice(0, 2).forEach((prod) => {
      console.log(`- ${prod.title} ($${prod.price}) [${prod.category}]`);
    });
  })
  .catch((err) => {
    console.warn("Task 40 Error encountered:", err.message);
  })
  .finally(() => {
    console.log("Task 40: Product listing process finished.");
  });

console.groupEnd();