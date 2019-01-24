// Q11. check whether the number entered by the user is a happy number or not. The user will enter 20 input number and program will check if it is a happy number or not.
//
//     A happy number is starting with any positive integer, replace the number by the sum of the squares of its digits in base-ten, and repeat the process until the number either equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)
//
// If a number is happy, then all members of its sequence are happy; if a number is unhappy, all members of the sequence are unhappy.
//
//     Input: n = 19
// Output: 19 is Happy Number,
//     1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
// As we reached to 1, 19 is a Happy Number.

"use strict";

function happy(num) {
    let i = 0;
    while(i != 30) {
        let sum = 0;
        let j = num;
        while(j != 0){
            sum += (j % 10)**2;
            j = Math.floor(j / 10);
        }
        if(sum === 1)
            return 1;
        j = sum;
        j++;
    }
    return 0;
}

let inp = prompt("Enter a number: ");
if(happy(inp)===1) {
    alert("The number is a happy number!");
    // console.log("The number is a happy number");
}
else
    alert("The number isn't a happy number");

