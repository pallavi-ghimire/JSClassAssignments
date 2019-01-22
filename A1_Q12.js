// Q12. check whether a number entered by the user is magic number or not. The user will enter 1729 input number and program will calculate and check if it is magic number or not and print on the console.
//
//     What is the magic number?
//     Input: 1729
// Sum of digits of the given number.(1 + 7 + 2 + 9 => 19)
// The reverse of 19 is 91
// The product of digit sum and the reverse of digit sum.(19 X 91 = 1729)
// If the product value and the given input are same,
//     then the given number is a magic number.(19 X 91 <=> 1729)
//
// Output: So, 1729 is a magic number.

"use strict";
let sum = 0, rev = 0;
var prod;
function magicNo(num) {
    let i = num;
    while (i) {
        sum += i % 10;
        i = Math.floor(i / 10);
    }
    let j = sum;
    while (j != 0) {
        let rem = j % 10;
        rev = rev * 10 + rem;
        j = Math.floor(j / 10);
    }
    prod = sum * rev;
    if (prod === num) {
        console.log("It is a magic number! ");
    } else {
        console.log("It's not a magic number.");
    }
}

magicNo(1728);