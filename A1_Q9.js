// Q9. check whether a number (entered by the user) is a perfect number or not.
//
//     A perfect number, a positive integer that is equal to the sum of its proper divisors. The smallest perfect number is 6, which is the sum of 1, 2, and 3.
//
// Input: 6
// Proper divisors of 6 are: 1, 2 and 3
// Sum of proper divisors = (1 + 2 + 3) which is equal to 6 (our input)
// Hence, 6 is perfect number

"use strict";

function perfect(num) {
    let sum = 0;
    if(num > 0) {
        for(let i = 1; i < num; i++) {
            if(num%i === 0){
                sum += i;
            }
        }
        if(sum === num) {
            alert("The number is a perfect number.");
        }
        else {
            alert("The number is not a perfect number.");
        }
    }
    else {
        alert("The number has to be positive.");
    }
}

let num = prompt("Enter a positive integer:");
perfect(num);