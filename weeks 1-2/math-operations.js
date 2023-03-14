// Intro to global math operations
    // JavaScript has a built-in library for math - in order to use a global 
    // operation, you need to use the uppercase 'Math' keyword
// Note: console.log lets you see the output, just pass in evaluations to print

// #1A - Math.floor -> rounds DOWN any decimal (both 4.2 and 4.7 -> 4)
console.log("NUMBER 1 - Math.floor, ceil, and random");
console.log("Math.floor - 4.2 & 4.7: ", Math.floor(4.2), " & ", Math.floor(4.7));

// #1B - Math.ceil -> always rounds a decmial UP to nearest integer
console.log("Ceil of same numbers: ", Math.ceil(4.2), " & ", Math.ceil(4.7));

// #1C - Math.random
console.log("Random # (1-10): ", Math.random() *10);
console.log("Better yet, a rounded # : ", Math.ceil(Math.random() * 10));

// #2 - Different Operands
console.log("NUMBER 2 - other operators");
console.log(
  "Multiplication of 2x3: ",
  2*3,
  "What's 2**3 doing? ",
  2**3
);

// #3 - Modulo - Check if number is even
console.log("NUMBER 3 - Modulo")
console.log("13 % 2 is " , 13%2);
console.log("13 is even? ", 13 % 2 === 0); 
    // Don't want only two ==, because 2 == '2' could return TRUE

// #4 - Creating a variable
console.log("NUMBER 4 - My variables");
let karaNumber = 8;
console.log("the coolest: ", karaNumber);
let danasSecretNum = 4;
console.log(karaNumber + danasSecretNum);
