// ES6  syntax: var vs let vs const.


// 1. const: the values it never be changed

const Pi = 3.14;
Pi = 1;

console.log(Pi);   //TypeError: Assignment to constant variable.

// 2. let: within the block only {}

console.log(i) // ReferenceError

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // ReferenceError: i is not defined, since i only available within {}

// 3. var: It's available for entire function(local scope)
           //or if it's not within a function, it is available within entire progrom (global scope)

console.log(j) // undefined: means j exsit but it hasn't been assigned yet.

for (var j = 0; j < 3; j++) {
  console.log(j);
}

console.log(j) // still can access the j variable



// shortcut: cmd+ d to select the same char, then replace all



//  Two examples to show the diff with var and let

// ES5
function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);               // undefined: since var will be hoisted within the function,
                                         // then it exsits but hasn't been assigned yet.
  }
}


// ES6
function getClothing(isCold) {
  if (isCold) {
    const freezing = 'Grab a jacket!';
  } else {
    const hot = 'It’s a shorts kind of day.';
    console.log(freezing);           //.  ReferenceError: freezing only available within if statement
  }
}



