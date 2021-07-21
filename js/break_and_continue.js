'use strict';
function oddSkipUserNum() {
    var userPrompt;
    var i =1;
    do {
        userPrompt = prompt('Input an odd number between 1 and 50.');
        if (isNaN(parseFloat(userPrompt)) || parseFloat(userPrompt) % 2 === 0 || parseFloat(userPrompt) > 50 || parseFloat(userPrompt) < 1) {
            alert("Try again.")
            continue;
        } else {
            console.log("Number to skip is: " + userPrompt);
            break;
        }
    } while (true)
    while (i < 50){
        if (parseFloat(userPrompt) == i) {
            console.log("Yikes! Skipping number: " + i);
            i +=2;
                } else{
            console.log("Here is an odd number: " + i);
            i += 2;
            }
    }
}
    // for () {
    //     for (let i = 1; i < 50; i = i + 2) {
    //         userPrompt = prompt('Input an odd number between 1 and 50.');
    //         while (true) {
    //             if (isNaN(parseFloat(userPrompt)) || parseFloat(userPrompt) % 2 === 0 || parseFloat(userPrompt) > 50 || parseFloat(userPrompt) < 1) {
    //                 alert("Invalid input, try again.");
    //                 continue;
    //             } else {
    //                 console.log("Number to skip is: " + userPrompt);
    //                 break;
    //             }
    //         }
    //         if (userPrompt == i) {
    //             console.log("Yikes! Skipping number: " + i);
    //             continue;
    //         }
    //         console.log("Here is an odd number: " + i);
    //     }
    //}
