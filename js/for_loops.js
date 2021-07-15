'use strict';

function showMultiplicationTable(input){
    for (let i =1; i<=10; i++){
        console.log(input*i);
    }
}

//my name jeff

function randomNumbersOddEven() {
    for (let i = 1; i <= 20; i++) {
        let newRand = Math.floor(Math.random() * 180) + 20;
        if (newRand % 2 === 0) {
            console.log(newRand + " is even.");
        } else {
            console.log(newRand + " is odd.");
        }
    }
}

function stringConcatLoop(){
        for (let i=1; i <=9; i++){
            let counter = 0;
            let string = "";
            //let newArray = [];
            while(counter <i){
                string += i;
                counter++;
            }
            //newArray.forEach(element => string += element);
            console.log(string);
        }
}

function countDownByFive(){
    for (let i=100; i > 0; i=i-5){
        console.log(i);
    }
}


