'use strict';

// Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.
// Input: start: 1 finish: 4 step: 1 | Output: 10
// Input: start: 4 finish: 10 step: | Output: 13

function sequenceSum(start, finish, step){
    let sum = start;
    while(start+step <= finish ){
        sum += (step+start);
        start+=step;
        }
    return sum;
}


// A narcissistic number is a non-negative integer (n) with m digits where the sum of all the individual digits raised to the power m is equal to n.
//
//     For example:
//
//     If n is 153, then m (the number of digits) is 3 and:
//
//     1**3 + 5**3 + 3**3 = 1 + 125 + 27 = 153
//
// So, 153 is a narcissistic number.
//
//     Objective: Write a script to generate and output the first 25 narcissistic integers.
const getDigitsArray = theNumber =>{
    let digitsArray = [];
    let numAsString = theNumber.toString();
    for (let i = 0; i < numAsString.length; i++){
        digitsArray.push(numAsString.charAt(i));

    }
    //console.log(digitsArray);
    return digitsArray;
}

function isNarcNum(arrayOfDigits, theNumberN){
    let digitPowerSum = 0;
    arrayOfDigits.forEach(digit => {
        digitPowerSum += parseFloat(digit) ** arrayOfDigits.length;
        //console.log(parseFloat(digit) ** arrayOfDigits.length);
    });
    if (theNumberN === digitPowerSum){
        return true;
    } else {
        return false;
    }

}
const getNarcNumbers = () => {
    let narcNumberArray = []
    let i = 1;
    while (narcNumberArray.length !== 25){
        if(isNarcNum(getDigitsArray(i),i)){
            narcNumberArray.push(i);
            console.log(`${i} is narcissistic. Array length ${narcNumberArray.length}`);
        }
        i++;
    }
    return narcNumberArray;
}

getNarcNumbers();
//console.log(isNarcNum(getDigitsArray(153),153));