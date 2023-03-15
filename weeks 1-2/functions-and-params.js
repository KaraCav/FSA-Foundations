// Day 8 - Working with Functions
// Two types we've seen now:
    // #1 - built into JavaScript
  //  console.log("Hello world!", 2); 

    // #2 - functions we write ourselves! we define these
   // let myVar2 = 15 + 4;

    // FUNCTION 1 
    function isLessThanTen(myVar) {
    //    let myNum = 15 + 4;
      if (myVar < 10) {
        console.log("my log says true");
        return true;
      } else {
        // myNum = 22;
        console.log("my log says false");
        return false;
      }
      // else {
      // console.log("line 19 was hit!", myNum);
      // }
    }
    
    console.log("invoking my function:", isLessThanTen(4)); // isLessThanTen returns true


    // FUNCTION 2
    function subtractNums(num1, num2) {
        console.log(num1 - num2);
    }

  //  subtractNums(5, 4);
   // subtractNums(4, 5);

   // console.log(myNum); // will not work! -> scope :)

/////// side example of string.length property ///////

// let word = "bird";
// console.log(word.length);
// for (let i = 1; i <= word.length; i++) {
//     console.log("hi");
// }