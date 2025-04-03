/* This is MULTI-LINE comment
The code below is an example STATEMENT
(instruction/command)
console.log is a FUNCTION that displays info in the console (output) area
STATEMENTS end with a SEMICOLON (;)
*/ 
console.log("i love cats");


//This is a single line comment

//DECLARE a new VVARIABLE
let pokemon;

// ASSIGN a VALUE to the variable
// its like putting an item in the box (storing it for later)
pokemon = "Jiggly-Puff"   

//DECLARE + ASSIGN in one statement 

let luckyNumber = 7;

// "PASS IN" a variable to a FUNCTION
console.log(luckyNumber);

// CHANGE the value of an existing variable 
let raining = false;
console.log(raining);
raining = true;
console.log(raining);  

//COPY data from one variable into another 
let breakfast = "playa bowl coffee";
let lunch; 
lunch = breakfast
console.log(lunch);
console.log(breakfast);
// Both variables hold the same value
//Above statements log the VALUES stored in VARIABLES named breakfast and lunch
//Below statement log the literal strong "lunch"
console.log("lunch")

//MATH OPERATORS
let score = 0;
score = score + 5;
console.log(score);
score = score -10;
console.log(score);
score = score * (-3);
console.log(score);
score = score / 5;
console.log(score);

//Can combine operators, evalution follows PEMDAS
score = (score * 3 / 7 -4 + (-6)) ** 2;
console.log(score);

// STRING CONCATENATION (merging with the PLUS SIGN)
//String LITERALS are indicated with "QUOTES"
let greeting = "Herro " + "Kitten" ; 
console.log(greeting);

//Can combine String Literals with VARIABLES
let username = "kitty_kitty_meow"
console.log("Welcome, \n" + username + "! 😽");

//Numbers got converted to Strings if combined
console.log(4 + 5); // 9 (did addition - actually did out the math)
console.log("4" + "5"); // 45 (concatenate, not math)
console.log(4 + '5'); 

// SHORTCUT OPERATORS (Increment/Decrement)
let counter = 0;
counter = counter + 1 // LONG WAY
counter++; // SHORTCUT to increase by one 
console.log("Count is " + counter);
counter--;
console.log("Count is " + counter);

/* FUNCTIONS: 
   Reusable sets of code statements that perform a specific task or process
*/

// console.log is a FUNCTION that we've used 
// TASK: display data in the console 
console.log("I just used a func!")

// DECLARE (create) your own function 
function skincare() {
    //STATMENTS (actions) to execute for this routine
    console.log("1. Cleanse");
    console.log("2. Use acne wash");
    console.log("3. Use soft wash");
    console.log("4. Use acne cream");
}
// CALL the function to be able to use it! 
skincare();
skincare(); // can run the function again

// *** Selection (CONDITIONALS) ***
// A conditionals expression is like a QUESTION
// that has a boolean (true/false) ANSWER  

console.log("Conditionals:"); 
console.log( 4 > 5); // 4 > 5 evalutes to false 
console.log("Is 10 less than 2?");
console.log(10<2);
console.log(2==2);
console.log( 3!= 2 );
console.log( 3 != 3 );

//Strings can also be comapred by dictionary order 
console.log("Kyanni" >= "Ayesha"); // true
console.log("Z" < "A" ); // false 
console.log("Katerina" == "Katherine"); 

// Can use comparison operators btwn VARIABLES and VALUES 
let myNickname = "Eshypoo";
console.log(myNickname == "Kat" );
