// NUMBER 1 - Fizzbuzz
function fizzBuzz(number) {
    for(let i = 1; i < number; i +=10) {
        if (i % 3 == 0) {
            console.log("fizz");
        }
        if (i % 5 == 0) {
          console.log("buzz");
        } 
        else console.log(i);
    }
}

// console.log(fizzBuzz(16));

// NUMBER 2 - Altering vs. returning a value
 let karaMoney = 8;
 let carinaMoney = 9;
 let haruMoney = -3;
 let moneyTotal;
 function addOurIcecreamMoney(a, b) {
    // moneyTotal = a + b  // -> returns 'undefined'
    return a + b;
 }

 console.log(addOurIcecreamMoney(karaMoney, carinaMoney));
console.log(addOurIcecreamMoney(haruMoney, carinaMoney));
 // console.log(moneyTotal);