"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color.toLowerCase() === "blue") {
//         return "Kind of Blue is a classic Jazz album.";
//     } else {
//         if (color.toLowerCase() === "red") {
//             return "Strawberries are red.";
//         } else {
//             if (color.toLowerCase() === "cyan") {
//                 return "Cyan? Really? Why?";
//             }
//         }
//     }
// }
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color.toLowerCase()){
        case("blue"):
            return "Kind of Blue is a classic Jazz album.";
            break;
        case("red"):
            return "Strawberries are red.";
            break;
        case("cyan"):
            return "Cyan? Really? Why?";
            break;
        default:
            return "Is that a color? Man, I was born yesterday. I don't know about that color.";
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userInputColor = prompt("Input the name of a color and I'll tell you something about it.");
alert(analyzeColor(userInputColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber,total){
    switch(parseFloat(luckyNumber)){
        case(0): return total;
        break;
        case(1): return total*0.9;
        break;
        case(2): return total*0.75
        break;
        case(3): return total*0.65;
        break;
        case(4): return total*0.50
        break;
        case(5): return 0.00;
        break;
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var bill = prompt("How much is your total (exclude $, and use this format: 0.00");
alert("Your lucky number is "+luckyNumber+", your original total was $" + bill +", and your new total is $" + calculateTotal(luckyNumber,bill));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function oddOrEven(inputNum){
if (inputNum % 2 === 0){
    return "even";
}
else {return "odd";}
}

console.log(luckyNumber + " is " + oddOrEven(luckyNumber) +".");
function plusOneHundred(inputNum){
    return parseFloat(inputNum)+100;
}
function negativeOrPositive(inputNum){
    if (inputNum > 0){
        return inputNum + " is a positive number.";
    }
    else if (inputNum < 0){
        return inputNum + " is a negative number.";
    } else if (inputNum === 0){
        return inputNum + " is 0.";
    }
}
 let wantToInputNumber = confirm("Wanna put in a number?");
if (wantToInputNumber === true){
    var numberToInput = prompt("Okay, put in a number.");
    if(typeof parseFloat(numberToInput)=="number"){
            alert(oddOrEven(numberToInput));
    alert(plusOneHundred(numberToInput))
    alert(negativeOrPositive(numberToInput));
    }
}