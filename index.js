// Follow along with the examples here
/*
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}
sayHello();
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
// sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

// sayHelloToLiz();
function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
*/

//our when we call doSomething, it will use thing as defined in the brackets

/*
function doSomething(thing) {
    console.log(thing);
}

doSomething("anything"); // we have added an argument to the funciton

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Gudalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1); //the number is coerced to a string

*/

//anatomy of the function

// function [tells us it is a function]
// sayHelloTo [the name we're giving the function]
/*(firstname) the (parameter), a placeholder that stores what gets 
passed in as an argument*/
/*in the examples above, we run the funciton sayHelloTo and it 
passes the arguments in the paramter firstName, then it executes 
the funciton as it is defined (console.log, etc)*/
//anything that evaluates to a value can be an argument, including expressions

// console.log(firstName); => reference error due to variable scope

/*if a variable is defined in a function, either as the parameter or part of
the body of the function, it can only be accessed inside that function. You can
declare variables in the global scope, allowing them to be accessed and overwritten
everywhere in the program. Avoid them due to being hard to track down.
*/

/* function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio");
say("Julio", "hello"); //this is now storing a name as the greeting

*/

//example below uses console log to tell us how the function breaks down when printed
/*
function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}

say("Hello", "Julio");
*/

/*
function add(x, y) {
    return x + y;
}

// add(1, 2);
console.log(add(80, 9000));
*/

/*
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}

console.log(say("Hello", "Liz")); //don't forget the commas.
*/

/*
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}

console.log(say("Hello", "Liz")); //=> Hello, Liz | undefined

*/
/*
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}

console.log(say("Hello", "Liz"));

//We print the function, or the return value of the function

function sayU(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`)
}

console.log(sayU("Hello", "Liz"));

*/
/* We print the function, which executes the console.log and then the return 
value. It's obtuse because the function is printing, but the gist is when you 
console.log(FUNCTION) you should get a return value. When you call the function,
it will do what it is instructed to do. So the function does what it is 
instructed to do, then it gives us the return value. I guess.

function add(x, y) {
    x + y;
    return x + y;
}
console.log(add(1, 2));

*/

//Can I try an example?

/*
function test(parameter1, parameter2) {
    
}

console.log(test(null, null)); //=>Should just print undefined.
//It's looking for a return value which it did not fined.

function test2(parameter3, parameter4) {
    console.log(`${parameter3}, ${parameter4}`);
}
console.log(test2("Ah", "ha"));// =>Print a message as a result of the funtion call
//then => undefined due to lack of return value

function test3(parameter5, parameter6) {
    console.log(`${parameter6}, ${parameter5}`);
}
console.log(test3("Ah", "ha"));

test2("Ah", "ha");
test3("Ah", "ha");

//conclusion: console logging a function will run a function then print 
//the return value. I guess.
*/

/* Creating a calculator:
1. the calculator asks the user to enter two numbers to be added together
2. the values are stored into variables (num1, num2)
3. the function calls the add() function, passing num1 and num2 as args
4. the add() function returns the sum
5. the calculator function return a message to the user telling them the sum

In step 3: our calculator function calls the add function. Functions can call
other functions, isn't that fun? Now, rather than make a long function with code
for adding, subtracting, multiplying, we can encapsulate the code for each
operator into its own function and call them. NOTHING AFTER THE RETURN LINE
INSIDE THE FUNCTION IS CALLED, WOW THEY ANSWERED MY QUESTION

*/

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!"); // won't run due to being after return
}

console.log(say("Howdy", "partner"));

// Could use some review later.