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
$(".random-number").append(gamble);

// function reset(){
//     num1= Math.floor(Math.random()*11+1);
//     num2= Math.floor(Math.random()*11+1);
//     num3= Math.floor(Math.random()*11+1);
//     num4= Math.floor(Math.random()*11+1);
//     userTotal= 0;
//     $('#guesses-remaining').append(number(11, 1));

// };

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
    alert("Your total score: " + counter);
    $("#scoreboard").text(scoreboard);

    if (counter === randomNumber) {
        alert("You Win!");
        wins++;
        $("#win").text(wins);
    }
    else if(counter > randomNumber) {
        alert("You lose!");
        losses++;
        $("#lose").text(losses);
    };

});

$("#three").on("click", function() {
    var thirdCrystal = number(10, 1);
    counter = counter + thirdCrystal;
    $("#one").append(thirdCrystal);
    alert("Your total score: " + counter);
    $("#scoreboard").text(scoreboard);

    if (counter === randomNumber) {
        alert("You Win!");
    }
    else if(counter > randomNumber) {
        alert("You lose!");
        losses++;
        $("#lose").text(losses);
    };

});

$("#four").on("click", function() {
    var fourthCrystal = number(10, 1);
    counter = counter + fourthCrystal;
    $("#one").append(fourthCrystal);
    alert("Your total score: " + counter);
    $("#scoreboard").text(scoreboard);
    
    if (counter === randomNumber) {
        alert("You Win!");
    }
    else if(counter > randomNumber) {
        alert("You lose!");
        losses++;
        $("#lose").text(losses);
    };

}); 

