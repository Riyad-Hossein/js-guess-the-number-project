let randomNumber = Math.floor((Math.random() * 20) + 1);
let guessNumber = document.getElementById("guessNumber");
let guessText = document.getElementById("guessText");
let score = 20;
let scoreText = document.getElementById("scoreText");
let highScoreText = document.getElementById("highScoreText");
const checkBtn = document.getElementById("checkBtn");
const playAgainBtn = document.getElementById("playAgainBtn");

guessNumber.textContent = randomNumber;
scoreText.textContent = score;
highScoreText.textContent = 0;
checkBtn.addEventListener("click",function(){
    let inputNumber = document.getElementById("inputNumber").value;
    if(Number(inputNumber) === randomNumber){
        guessText.textContent = "Correct Number";
        document.querySelector("body").style.backgroundColor = "#4bf32182";
        if(score> highScoreText.textContent){
            highScoreText.textContent = score;
        }
    }else if(inputNumber > randomNumber){
        score = score - 1;
        scoreText.textContent = score;
        guessText.textContent = "Number too high";
        document.querySelector("body").style.backgroundColor = "#fff"
    }else if(inputNumber < randomNumber){
        score = score - 1;
        scoreText.textContent = score;
        guessText.textContent = "Number too low";
        document.querySelector("body").style.backgroundColor = "#fff"
    }
})

playAgainBtn.addEventListener("click",function(){
    randomNumber = Math.floor((Math.random() * 20) + 1);
    guessNumber.textContent = randomNumber;
    document.getElementById("inputNumber").value = "";
    guessText.textContent = "Start Guessing....";
    document.querySelector("body").style.backgroundColor = "#fff";
    score = 20;
    scoreText.textContent = score;

})