// Write a function that will take one argument (a number) and perform the following operations:
//     Take half of the number and store the result.
//     Square the result of #1 and store that result.
//     Calculate the area of a circle with the result of #2 as the radius.

function Calculator(num) {
    let temp = num / 2;
    temp = temp * temp;
    let area = Math.PI * temp * temp;
    console.log(area);
}
Calculator(2);