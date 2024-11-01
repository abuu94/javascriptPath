// let keys = [];
// for (let key in yourobject) {
//     if (yourobject.hasOwnProperty(key)) keys.push(key);
// }
// for (let i = 300; i < keys.length && i < 600; i++) {
//     console.log(keys[i], yourobject[keys[i]]);
// }

// Gets user input
var name1 = prompt("What is your name?");
var num = prompt("What is your favorite number? ");

// Uses user input to print out information
println("Hello " + name1 + "!");
println(num + "?! That's my favorite number too!");

// Prints out the variable type
println("Name is a " + typeof name1);
println("Num is a " + typeof num);