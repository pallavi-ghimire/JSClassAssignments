// Q10. check whether the number entered by the user is a strong number or not.
//
//     Strong Numbers are the numbers whose sum of factorial of digits is equal to the original number. Given a number, check if it is a Strong Number or not.
//
//     Input: 145
// Output: Yes
// Sum of digit factorials = 1! + 4! + 5!
//     = 1 + 24 + 120
//     = 145

"use strict";

function strong(num) {
    var fact = 1, temp = num, sum = 0;
    while(temp) {
        var i;
        fact = 1;
        for(i = temp % 10; i > 0; i--) {
            fact = fact * i;
            console.log(fact);
        }
        temp = Math.floor(temp / 10);
        sum += fact;
    }
    if(sum === num) {
        alert("Strong number");
        // console.log("Strong");
    }
    else {
        alert("Not strong");
        // console.log("Nope");
    }
}

let num = prompt("Enter a positive integer:");
// strong(145);
strong(num);