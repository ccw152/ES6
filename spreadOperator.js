
Below is spread operator ES6
*/

// basic syntax
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);


// combine two array into an array by ...
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits,...vegetables];  //without arr1.concat(arr2)

console.log(produce);

// Rest parameter by spread operator
// example 1
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

// Example 2: an function with indefinite parameters
// ps: Variadic functions are functions that take an indefinite number of arguments.

function sum(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}

// Practical example: To write an indefinite function by speard operator

function average(...nums) {
    if (nums.length === 0) {
            return 0;
        }
    let sum = 0;
    let count = 0;
    for (let num of nums) {
        count++;
        sum+=num;
    }
    return sum/count;

}

console.log(average(2, 6));  // 4
console.log(average(2, 3, 3, 5, 7, 10)); // 5
console.log(average(7, 1432, 12, 13, 100));// 312.8
console.log(average()); // 0


// Error case 1: edge-case
function average(...nums) {
    let sum = 0;
    let count = 0;
    for (let num of nums) {
        if (nums.length === 0) { // Never run if () condition body, since inside for of loop, it
                                // run num to iterate
        return 0;
        }
        count++;
        sum+=num;
    }
    return sum/count;

}

console.log(average(2, 6));  // 4
console.log(average(2, 3, 3, 5, 7, 10)); // 5
console.log(average(7, 1432, 12, 13, 100));// 312.8
console.log(average()); // 0