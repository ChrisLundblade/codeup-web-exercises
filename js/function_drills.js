'use strict';

function isOdd(number){
    return number%2 !==0;
}
function isEven(number){
    return number%2 ===0;
}
function identity(input){
    return input;
}
function isFive(input){
    return input ==5;
}
function addFive(input){
    return input + 5;
}
function isMultipleOfFive(input){
    return input%5==0;
}
function isThree(input){
    return input ==3;
}
function isMultipleOfThree(input){
    return input%3==0;
}
function isMultipleOfThreeAndFive(input){
    return (input%3==0 && input%5==0);
}
function isMultipleOf(input, n){
    return input % n == 0;
}
function isTrue(bool){
    return bool;
}
function isFalse(bool){
    return !bool;
}
function isTruthy(input){
    if (input){
        return true;
    }
    else{
        return false;
    }
}
function isFalsy(input){
    if (!input){
        return true;
    }
    else{
        return false;
    }
}
function isVowel(letter){
    //So this is just going to look at the first character, so inputs longer than one character wont throw errors. This logic just checks to see if it's a lower or uppercase vowel
    if (letter.charAt(0) === "A" || letter.charAt(0) === "a" || letter.charAt(0) === "e" || letter.charAt(0) === "E" || letter.charAt(0) === "I" || letter.charAt(0) === "i" || letter.charAt(0) === "o" || letter.charAt(0) === "O" || letter.charAt(0) === "U" || letter.charAt(0) === "u"){
        return true;
    } else{
        return false;
    }
}
const consonants = ["B","b","C","c","d","D","f","F","G","g","h","H","j","J","K","k","l","L","M","m","N","n","P","p","q","Q","r","R","S","s","T","t","V","v","w","W","x","X","Y","y","z","Z"]
function isConsonant(inputChar){
    return consonants.includes(inputChar);
}
function isCapital(letter){
    return letter.toLowerCase() !== letter;
}
function isLowerCase(letter){
    return letter.toUpperCase() !== letter;
}
function hasLowerCase(inputStr){
    return inputStr != inputStr.toUpperCase();
}
function isSpace(letter){
    return letter === " ";
}
function notZero(input){
    return input != 0;
}