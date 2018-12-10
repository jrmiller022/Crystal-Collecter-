//variables
var randomNumber = 0;
var wins = 0;
var losses = 0;

//display random number in number generater function
function number(min, max) {
    randomNumber = Math.floor(Math.random() * ((max - min) + 1) + min);
    return randomNumber;
};

// Calling function called number to append random number
$(".random-number").append(number(120, 19));

function reset(){
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#guesses-remaining').append(number(11, 1));
};

//when user clicks on image, the stored number will display
var counter = 0;
$("#one").on("click", function() {
    var firstCrystal = number(10, 1);
    counter = counter + firstCrystal;
    $("#one").append(firstCrystal);
    alert("Your total score: " + counter);
    $("#scoreboard").text(scoreboard);

    if (counter === randomNumber) {
        alert("You Win!");
    }
    else if(counter > randomNumber) {
        alert("You lose!");
    }
});

$("#two").on("click", function() {
    var secondCrystal = number(10, 1);
    counter = counter + secondCrystal;
    $("#one").append(secondCrystal);
    alert("Your total score: " + counter);
    $("#scoreboard").text(scoreboard);

    if (counter === randomNumber) {
        alert("You Win!");
    }
    else if(counter > randomNumber) {
        alert("You lose!");
    }
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
    }
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
    }
});

var numberOptions = [5, 6, 7, 8, 9, 10, 11, 12,];
 
// Create a for loop to create crystals for every numberOptions.
for (var i = 0; i < numberOptions.length; i++) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");

// Each crystal will be given a src link to the crystal image.
crystalImage.attr("src", "assets/images/blue%20crystal.png", "assets/images/green%20crystal.jpeg", "assets/images/red%20crystal.ico", "assets/images/yellow%20crystal.png");

// Each image crystal will be given a data attribute called data-crystalValue.
// This data will be set equal to the array value.
crystalImage.attr("data-crystalValue", numberOptions[i]);
};

// Each crystal-image with classes/Attributes will be added to the page.



// This will apply to all 4 images all the page.



    
//score will display and add in the score area



//when user matches the random number the user wins




//wehn the user goes over the random number, user loses. the game reserts and a new random number is displayed