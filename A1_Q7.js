// Q7. Determine whether a year is a leap year or not
//
// Steps:
//
//     If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

'use strict';

function LeapYear(year) {
    if((year%4 == 0 && year%100 != 0) || year%400 == 0){
        return 1;
    }
    else{
        return 0;
    }
}

if (LeapYear(1800) == 1){
    console.log("The year is leap year");
}
else{
    console.log("The year is not leap year");
}

// LeapYear(2016);