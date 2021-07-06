"use strict";

//alert("FREE HOT DOG WATER!");

// confirm

// var userDecision = confirm("Are you sure you don't want any hot dog water?");
// console.log(userDecision);
//
// if(userDecision === true){
//     alert("NICE!");
// } else{
//     alert("Dude, don't be a square. All the cool kids are buying hot dog water.")
// }

// prompt

// var currentSpeed = 65;
// var plannedSpeedMph = prompt("How fast do you want to go [to the hot dog water store] in mph");
// console.log(plannedSpeedMph);
// var distanceLeftInMiles = prompt("How many miles away is the hot dog water store?");
// var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles / currentSpeed) * 60;
// var timeToDestinationAtPlannedSpeed = (distanceLeftInMiles / plannedSpeedMph) * 60;
// var timeGain = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeed;
// var minutesGained = Math.floor(timeGain);
// var secondsGained = Math.round((timeGain - minutesGained) * 60);
// console.log("If you drive at " + plannedSpeedMph + " mph, you will arrive at the hot dog water store " + minutesGained + " minutes & " + secondsGained + " seconds earlier. GOTTA GO FAST!");

//Exercise

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userFavColor = prompt("What is your favorite color?");
alert("Rad, " + userFavColor + " is my favorite color too!");

//Part 2: Alert and Prompt Interactions
//Movie Rental
alert("Movie Rental Problem")
var lilMerDays = prompt("How many days did you rent The Little Mermaid for?");
var brotherBearDays = prompt("How many days did you rent Brother Bear for?");
var herculesDays = prompt("How many days did you rent hercules for?");
var rentalDayPrice = prompt("How much does it cost to rent a movie for a day?");

alert("It will be $" + ((parseInt(lilMerDays)+parseInt(brotherBearDays)+parseInt(herculesDays))*rentalDayPrice) + " for all of your rentals.");

//Contracting
alert("Contracting Problem")
var amazonHours = prompt("How many hours did you work at Amazon this week?");
var googleHours = prompt("How many hours did you work at Google this week?");
var facebookHours = prompt("How many hours did you work at Facebook this week?");

alert("Your pay for this week will be $" + ((parseInt(amazonHours)*380)+(parseInt(googleHours)*400)+(parseInt(facebookHours)*350)) + " for all of your work.");

//Class Enrollment
alert("Class Enrollment Problem")
alert("Class Capacity is 20 students.");
var studentsInClass = prompt("How many students are already in the class you want to enroll in?")
var noScheduleConflict = confirm("Click Ok if this class fits into your current schedule.");
if (studentsInClass < 20 && noScheduleConflict==true){
    alert("Great, you can enroll in this class, then.");
} else {
    alert("Unfortunately you cannot enroll in this class.");
}

//Product Offer Valid?
alert("Product Offer Valid Problem");
function offerValid (items, premium, notExpired){

    if (!notExpired){return false;}
    else if(items < 3 && !premium){
        return false;
    }
    else {return true;}

}
var numberOfItems = prompt("How many items are you buying?");
var premiumMember = confirm("Click Ok if you are you a premium member.");
var offerNotExpired = confirm("Click Ok if your product offer still valid.");

if (offerValid(numberOfItems,premiumMember,offerNotExpired)==true){
    alert("Your offer is valid for this purchase.")
}else{
    alert("Unfortunately your offer cannot be applied to this purchase.")
}

//Problem 4 even though you didn't ask us to do it

// function goodPassword(password, username) {
//
//     if (username.length > 20 || password.indexOf(username) > -1){
//         return false;
//     }
//     else if(username !== username.trim() || password !== password.trim()){
//         return false;
//     }
//     else if (password.length <= 5) {
//         return false;
//     }
//
//     return true;
// }
// var username = prompt("Username:");
// var password = prompt("Password:");
// if (goodPassword(password,username)==true){
//     alert("This Username and Password combination is valid.");
// }else{
//     alert("This Username and Password combination is invalid.");
// }