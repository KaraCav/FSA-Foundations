// ~~~ PART 1: Other array built-in methods ~~~ //
    // We already talked about push(), pop(), shift(), and unshift()

// Let's start off with an array of students:
     const students = ["Atticus", "Scout", "Boo", "Tom"]

// #1 - Using splice() to add and remove items at the same time
    // 1st Parameter - Where do we start, either removing or adding an entry
        // "1" means we start at index 1 ("Scout")
    // 2nd Parameter - How many items to remove? This CAN be a 0. We are removing 2.
    // The rest of the parameters - data we are adding at the starting index (1)
    
    // students.splice(1, 0, "Jem");
    // console.log(students);

// #2 - To String
    // console.log(students);
    // console.log(typeof students);
    // let myVar = students.toString();
    //  console.log(typeof(myVar));
    //  console.log(students, myVar);
    //  let myJoin = students.join(" ");
    //  console.log(myJoin);

// ~~~ PART 2: Arrays as parameters ~~~ //

// #1 - Iteration
for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
    if(students[i] === "Scout") {
        console.log(i, " found it!")
    }
}

// #2 - Countdown with For and While loops
function countdown(userNum) {
    for(let i = userNum; i >= 0; i--) {
        console.log(i);
    }
}
countdown(7);

function countdown2(userNum) {
    while(userNum > -1) {
        console.log(userNum);
        userNum = userNum - 1;
    }
}
// ~~~ PART 3: Strings as Arrays ~~~ //

// #1 - Strings can be iterated over
let myString = "hey there pardner";
for(let i = 0; i < myString.length; i++) {
    console.log(i, ": ", myString[i]);
}

// #2 - Accessing a letter of a string
    // Log just the first "t" in "tomato"

const fancyArray = [3, 4, ["tomato", "potato"], 56, 2];
console.log(fancyArray[2][0]);  // -> This will log "tomato"
    
console.log(fancyArray[2][0][0]);  // -> This will log the "t"
