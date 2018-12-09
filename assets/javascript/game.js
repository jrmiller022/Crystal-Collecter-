//variables
var randomNumber = 0;
var wins = 0;
var losses = 0;
var images = ["assets/images/blue%20crystal.png","assets/images/green%20crystal.jpeg","assets/images/red%20crystal.ico","assets/images/yellow%20crystal.png"];

//display random number in number generater function
function number(min, max) {
    randomNumber = Math.floor(Math.random() * ((max - min) + 1) + min);
    return randomNumber;
}

// Calling function called number to append random number
$(".random-number").append(number(120, 19));

//when user clicks on image, the stored number will display
var counter = 0;
$(".crystal-image").on("click", function() {
    counter = counter + 1;
    alert("new score: " + counter);
    if (counter === randomNumber) {
        alert("You Win!");
    }
    else if(counter >= randomNumber) {
        alert("You lose!");
    }
})

    
//score will display and add in the score area
$("#col-md-4").text(wins);
$("#col-md-4").text(losses);


//when user matches the random number the user wins




//wehn the user goes over the random number, user loses. the game reserts and a new random number is displayed