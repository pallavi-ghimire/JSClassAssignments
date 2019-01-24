// Q5. Given the percentage of a student, find out the division of that student. Conditions:
//
// Distinction if 100 > percentage >= 80
//     First Division if 80 > percentage >= 60
//     Second Division if 60 > percentage >= 40
//     Third Division if 40 > percentage >= 32
//     Else fail

function div(perc) {
    var grade;
    if(perc<100 && perc>=80)
        grade = "Distinction";
    else if (perc<80 && perc>=60)
        grade = "First division";
    else if(perc<60 && perc >=40)
        grade = "Second division";
    else if(perc<40 && perc >= 32)
        grade = "Third Division";
    else
        grade = fail;
    console.log(grade);
}
div(50);
