// ES6 For of loop

// ES6 Syntax, The for...of loop is used to loop over any type of data that is iterable.
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

// ES5: For loop: for loop is having to keep track of the counter and exit condition.
var digits2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < digits2.length; i++) {
  console.log(digits2[i]);
}

// ES5: For in loop for an array
var digits3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var index in digits3) {
  console.log(digits3[index]);
}

// ES5: For in loop for an object

var obj = {
  name: 'Angeles',
  age: 26,
  job: function(){
    console.log('engineer');
  }
};

for (var key in obj) {
  console.log(key);     // name, age, job
}

// ES5, For in loop for prototype: the for...in loop can get you into big trouble when you need to add an extra method to an array (or another object). Because for...in loops loop over all enumerable properties, this means if you add any additional properties to the array's prototype, then those properties will also appear in the loop.
Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digit4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digit4) {
  console.log(digit4[index]);  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , [function]
}

// Practice example:
/*
Write a for...of loop that:

- loops through each day in the days array
- capitalizes the first letter of the day
- and prints the day out to the console
*/

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (let day of days) {
  day = day.slice(0,1).toUpperCase()+day.slice(1);
  console.log(day);
}

