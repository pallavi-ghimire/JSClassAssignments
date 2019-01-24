// Q2. Calculate properties of a circle, using the definitions here.
//
//     Store a radius into a variable.
//     Calculate the circumference based on the radius, and output "The circumference is NN".
//     Calculate the area based on the radius, and output "The area is NN".
//     Q3. The Temperature Converter
//
// Store a celsius temperature into a variable.
//     Convert it to fahrenheit and output "NN°C is NN°F".
//     Now store a fahrenheit temperature into a variable.
//     Convert it to celsius and output "NN°F is NN°C."

"use strict";
const cir = function(r){
    let circumference = 2 * Math.PI * r;
    // console.log(circumference);
    let area = Math.PI * r * r;
    console.log("The circumference is "+circumference);
    console.log("The area is "+area);
};
cir(5);

// var c = 0;
var f = 0;
let c = (f - 32) * 5/9
// f = (c * 9/5) + 32;
// console.log(c+" degree c "+"is "+f+" degree f");
console.log(f+" degree f "+"is "+c+" degree c");