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
// Reset Random number and Your total score.
var gamble = number(120, 19);
$(".random-number").append(gamble);

//when user clicks on image, the stored number will display
var counter = 0;
$("#one").on("click", function() {
    var firstCrystal = number(10, 1);
    counter = counter + firstCrystal;
    $("#guesses-remaining").text(counter);
    
    if (counter === gamble) {
        alert("You Win!");
        wins++;
        $("#wins").text(wins);
    }
    else if(counter > gamble) {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
    };

});


$("#two").on("click", function() {
    var secondCrystal = number(10, 1);
    counter = counter + secondCrystal;
    $("#one").append(secondCrystal);
    $("#guesses-remaining").text(counter);

    if (counter === gamble) {
        alert("You Win!");
        wins++;
        $("#wins").text(wins);
    }
    else if(counter > gamble) {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
    };

});

$("#three").on("click", function() {
    var thirdCrystal = number(10, 1);
    counter = counter + thirdCrystal;
    $("#one").append(thirdCrystal);
    $("#guesses-remaining").text(counter);

    if (counter === gamble) {
        alert("You Win!");
        wins++;
        $("#wins").text(wins);
    }
    else if(counter > gamble) {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
    };

});

$("#four").on("click", function() {
    var fourthCrystal = number(10, 1);
    counter = counter + fourthCrystal;
    $("#one").append(fourthCrystal);
    $("#guesses-remaining").text(counter);
    
    if (counter === gamble) {
        alert("You Win!");
        wins++;
        $("#wins").text(wins);
    }
    else if(counter > gamble) {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
    };

}); 

