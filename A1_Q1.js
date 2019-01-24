// Q1. Want to find out how old you'll be? Calculate it!
//
// Store your birth year in a variable.
//     Store a future year in a variable.
//     Calculate your 2 possible ages for that year based on the stored values. For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

"use strict";
const age = (birth, current) =>current-birth;
const age1 = (birth, current)=>current-birth+1;
var birth = 1988;
var current = 2026;
console.log("I will be either " +age(birth,current)+" or "+age1(birth,current) +" in "+current);
