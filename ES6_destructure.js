// ES6 destructure and Object literal shorthand


// 1. Destructuring values from an array
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z); // 10, 25, -34

// hint: You can also ignore values when destructuring arrays. For example, const [x, , z] = point; ignores the y coordinate and discards it.

const [a, ,c] = point;

console.log(a,c); // 10, -34




// 2. Destructuring values from an object

const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;

console.log(getArea());  // NaN, Since Calling getArea() will return NaN. When you destructure the object and store the getArea() method into the getArea variable, it no longer has access to this in the circle object which results in an area that is NaN.


// 3. object literal shorthand

// before shorthand
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);


// shorthand method to assign object property

let gemstone = {type, color, carat};


// further for object method, one can remove the anonymous function key word 'function'

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};

// shorthand method

let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};