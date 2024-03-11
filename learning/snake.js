const gameBoard = document.querySelector("#game_board");
const scoreElement = document.querySelector("#score");
const highScoreElement = document.querySelector("#high_score");
const controls = document.querySelectorAll(".controls i");
let foodX , foodY;
let snakeX = 10, snakeY = 13;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let gameOver = false;
let setIntervalId;
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `${highScore}`;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over! Press ok to play again");
    location.reload();
}

const changeDirection = (event) => {
    if(event.key === "ArrowUp"  || event.key === "w" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(event.key === "ArrowDown"  || event.key === "s" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if(event.key === "ArrowLeft"  || event.key === "a" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if(event.key === "ArrowRight" || event.key === "d" && velocityX != -1 ){
        velocityX = 1;
        velocityY = 0;
    }
}

controls.forEach(key => {
    key.addEventListener("click", () => changeDirection({key : key.dataset.key}));
})

const initGame = () => {

    if(gameOver) return handleGameOver();

    let htmlMarkup = `<div class="food" style="grid-area : ${foodY} / ${foodX}"></div>`;
    
    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
        score++;

        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `${score}`;
        highScoreElement.innerText = `${highScore}`
    }

    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        gameOver = true;
    }

    for(let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

    snakeX += velocityX;
    snakeY += velocityY;

   for(let i = 0; i < snakeBody.length; i++){
    htmlMarkup += `<div class="head" style="grid-area : ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
        gameOver = true;
    }
   }
    gameBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
setIntervalId = setInterval(initGame, 125);

document.addEventListener("keydown", changeDirection)