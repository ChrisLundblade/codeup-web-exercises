'use strict';

var counter = 1;
while (counter < 65536){

    counter*=2;
    console.log(counter);
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
var conesToBuy;
// This expression will generate a random number between 1 and 5

do{
    console.log("I now have " + allCones + " cones left to sell.")
    conesToBuy=Math.floor(Math.random() * 5) + 1;
    if(conesToBuy > allCones){
        console.log("Cannot sell you "+conesToBuy+" cones because I only have " + allCones +"...");
    }else{
        allCones= allCones-conesToBuy;
        console.log(conesToBuy +" cone[s] sold...");
    }
    if(allCones===0){
        console.log("Yay! I sold them all!");
    }

}while (allCones!==0)