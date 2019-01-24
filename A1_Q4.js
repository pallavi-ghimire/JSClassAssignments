// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//     mixUp('mix', 'pod'); // Outputs: 'pox mid'
// mixUp('dog', 'dinner'); // Outputs:  'dig donner'

function mixUp(word1, word2) {
    var c1, c2;
    c1 = word1.slice(0, 2)+word2.slice(2,word2.length);
    c2 = word2.slice(0, 2)+word1.slice(2, word1.length);
    console.log(c1, c2);
}
mixUp("mix", "poddle");