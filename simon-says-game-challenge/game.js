$("h1").css("color", "red");

gamePattern = [];
userClickedPattern = [];
buttonColours = ["red", "blue", "green", "yellow"];
var gameStarted = false;
var level = 0;

$(document).on("keydown", function(){
    if(!gameStarted){
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // playSound(userChosenColour);
    flashButton(userChosenColour);
    // console.log(userClickedPattern);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    for (let i = 0; i < gamePattern.length; i++) {
        setTimeout(function () {
          flashButton(gamePattern[i]);
          playSound(gamePattern[i]);
        }, 400 * i); 
      }
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else{
        wrongAnswer();
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function playSound(colour){
    var audio = new Audio('./sounds/' + colour + '.mp3');
    audio.play();
}

function flashButton(colour){
    $("#" + colour).fadeOut(100).fadeIn(100);
    playSound(colour);
}

function wrongAnswer(){
    var audio = new Audio('./sounds/wrong.mp3')
    audio.play();

    $("body").addClass("game-over");

    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
}

function startOver(){
    level = 0;
    gameStarted = false;
    gamePattern = [];
    userClickedPattern = [];
}