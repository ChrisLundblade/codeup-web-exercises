'use strict';

// if(flavor==="chocolate"){
//     alert("chocolate it is!");
// }else if(flavor === "vanilla"){
//     alert("One vanilla!");
// }
// else
// {
//     alert("We don't have that flavor");
// }
//
// switch(flavor){
//     case("chocolate"):
//         alert("chocolate it is!");
//         break;
//     case("vanilla"):
//         alert("One vanilla!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We don't have that flavor");
// }

// function getIceCreamOrder(flavor){
//     if(flavor==="chocolate"){
//         alert("chocolate it is!");
//     }else if(flavor === "vanilla"){
//         alert("One vanilla!");
//     }
//     else
//     {
//         alert("We don't have that flavor");
//     }
// }

// function getIceCreamOrder(){
//     return prompt("What kinda Ice Cream you want?").toLowerCase();
// }
//
// function doWeHaveThatFlavor(flavor){
//     if(flavor ==="chocolate"||flavor==="vanilla"||flavor==="strawberry"){
//         return true;
//     }
// }
//
// function replyToCustomer(flavor){
//     if(doWeHaveThatFlavor(flavor)){
//         alert("One " + flavor + " coming right up!");
//     } else{
//         alert ("We do not have that flavor. Sorry!");
//     }
// }
//
// replyToCustomer(getIceCreamOrder());

// var decision = confirm("Are you sure you want to close this page!");
// if(decision){
//     alert("Okay. Closing the page.")
// }else{
//     alert("Yay! Keeping page open ... ")
// }
// alert( (decision)? "Okay. Closing the page." : "Yay! Keeping page open ... ");

var num = 7;

// if(num % 5 ===0){
//     alert("That number is divisible by 5 and is not prime.")
// }else{
//     alert("that number is not divisible by 5");
// }

// function divisibleByFive(num){
    // if (num % 5 ===0){
    //     alert("That number is divisible by 5.")
    // } else{
    //     alert("That number is not divisible by 5.")
    // }
//     alert ( (num% 5 ===0)? "That number is divisible by 5" : "That number is not divisible by 5.");
// }
function divisibleByFive(num){
    return (num % 5 ===0);
}

function isUndefined(input){
    return (typeof input === "undefined");
}