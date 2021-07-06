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

var currentSpeed = 65;
var plannedSpeedMph = prompt("How fast do you want to [to the hot dog water store] go in mph");
console.log(plannedSpeedMph);
var distanceLeftInMiles = prompt("How many miles away is the hot dog water store?");
var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles / currentSpeed) * 60;
var timeToDestinationAtPlannedSpeed = (distanceLeftInMiles / plannedSpeedMph) * 60;
var timeGain = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeed;
var minutesGained = Math.floor(timeGain);
var secondsGained = Math.round((timeGain - minutesGained) * 60);
console.log("If you drive at " + plannedSpeedMph + " mph, you will arrive at the hot dog water store " + minutesGained + " minutes & " + secondsGained + " seconds earlier.");