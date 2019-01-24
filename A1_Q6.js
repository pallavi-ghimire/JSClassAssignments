// Q6. The Pluralizer
//
// Write a function named pluralize that: takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".
//
//     For example:
//
//     pluralize('cat', 1) // Outputs: 1 cat
// pluralize('cat', 2) // Outputs: 2 cats

function pluralizer(noun, num) {
    if(num>1){
        console.log(num + " " + noun + "s");
    }
    else
        console.log(num +" "+ noun);
}
pluralizer("Cat", 10000);