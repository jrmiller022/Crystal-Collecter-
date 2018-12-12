$(document).ready(function() {
//variables
var wins = 0;
var losses = 0;
var numberOptions = [5, 6, 7, 8, 9, 10, 11, 12,];

//display random number in number generater function
function number(min, max) {
    randomNumber = Math.floor(Math.random() * ((max - min) + 1) + min);
    return randomNumber;
};

// Calling function called number to append random number

    var gamble = number(120, 19);
$("#game").append(gamble);

//when user clicks on image, the stored number will display
var counter = 0;
$("#one").on("click", function() {
    var firstCrystal = number(5, 5);
    counter = counter + firstCrystal;
    $("#guesses-remaining").text(counter);
    
    if (counter === gamble) {
        wins++;
        $("#wins").text(wins);
        reset();
    }
    else if(counter > gamble) {
        losses++;
        $("#losses").text(losses);
        reset();
    };

});


$("#two").on("click", function() {
    var secondCrystal = number(10, 10);
    counter = counter + secondCrystal;
    $("#one").append(secondCrystal);
    $("#guesses-remaining").text(counter);

    if (counter === gamble) {
        wins++;
        $("#wins").text(wins);
        reset();
    }
    else if(counter > gamble) {
        losses++;
        $("#losses").text(losses);
        reset();
    };

});

$("#three").on("click", function() {
    var thirdCrystal = number(1, 1);
    counter = counter + thirdCrystal;
    $("#one").append(thirdCrystal);
    $("#guesses-remaining").text(counter);

    if (counter === gamble) {
        wins++;
        $("#wins").text(wins);
        reset();
    }
    else if(counter > gamble) {
        losses++;
        $("#losses").text(losses);
        reset();
    };

});

$("#four").on("click", function() {
    var fourthCrystal = number(2, 2);
    counter = counter + fourthCrystal;
    $("#one").append(fourthCrystal);
    $("#guesses-remaining").text(counter);
    
    if (counter === gamble) {
        wins++;
        $("#wins").text(wins);
        reset();
    }
    else if(counter > gamble) {
        losses++;
        $("#losses").text(losses);
        reset();
    };

}); 

// Reset Random number and Your total score.
function reset(){
    counter = 0;
    gamble = number(120, 19);
    $("#game").text(gamble);
    $("#guesses-remaining").append(counter);
 }
    
});