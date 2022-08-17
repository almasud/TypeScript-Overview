"use strict";
// Array
let a = [3, "Hello", { t: 3 }];
// Can assign only number, string or object in any position. 
// Only Type is mandatory not order.
a[0] = "World";
// Tuple
let b = [3, "Hello", { t: 3 }];
// Can assign only number, string or object in specific order. 
// Type and order is mandatory.
// b[0] = "World";
b[0] = 4;
console.log(`a[0]: ${a[0]} and b[1]: ${b[1]}`);
