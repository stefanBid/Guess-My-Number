"use strict";

//Random Number between 1-20
let SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
let POINT = 50;
let highscore = 0;
let text = "";
let game = 0;
let level = 1;
let life = 5;
let topLife = 5;
let score = 0;
let win = false;
console.log("Welcome Bid Corporations 2022©");
// HTML <body>
const body = document.querySelector("body");

//HTML <h1>
const titLevel = document.querySelector(".game-liv");
const titMessage = document.querySelector(".game-tit");

//HTML <p>
const parLife = document.querySelector(".life");
const parHighscore = document.querySelector(".highscore");
const parScore = document.querySelector(".score");
const parRanking = document.querySelector(".ranking");

//HTML <div>
const divNumber = document.querySelector(".number");
const divBar = document.querySelector(".bar");
const divModal = document.querySelectorAll(".modal");
const divOverlay = document.querySelector(".overlay");

//HTML <input>
const inGuess = document.querySelector(".guess");

//HTML <button>
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnGameInfo = document.querySelector(".info-game");
const btnRank = document.querySelector(".rank");
const btnLevNext = document.querySelector(".lev-next");

//Function that control opening of Game Info
const openModalGameInfo = function () {
  divModal[0].classList.remove("hidden");
  divOverlay.classList.remove("hidden");
};

//Function that control closure of Game Info
const closeModalGameInfo = function () {
  divModal[0].classList.add("hidden");
  divOverlay.classList.add("hidden");
};

//Function that control opening Rank Info
const openModalRank = function () {
  divModal[1].classList.remove("hidden");
  divOverlay.classList.remove("hidden");
};

//Function that control closure Rank Info
const closeModalRank = function () {
  divModal[1].classList.add("hidden");
  divOverlay.classList.add("hidden");
};

//Function that control  when lost the game
const loseGame = function () {
  game = game + 1;
  titMessage.textContent = "😭 GAME OVER!";
  body.style.backgroundColor = "#ff0000";
  divNumber.textContent = SECRET_NUMBER;
  parLife.textContent = `x${0} ☠️`;
  btnAgain.classList.remove("hidden");
  btnRank.classList.remove("hidden");
  text = parRanking.textContent;
  text = text + ` - - - Game: ${game} Level: ${level} Score: ${score} - - -`;
  parRanking.textContent = text;
};

//Function that control life decrease
const scoreDecrease = function (life, message) {
  life = life - 1;
  parLife.textContent = `x${life} 💔`;
  parLife.classList.add("error1");
  titMessage.classList.add("error1");
  divNumber.classList.add("error");
  setTimeout(function () {
    titMessage.classList.remove("error1");
    parLife.classList.remove("error1");
    divNumber.classList.remove("error");
    parLife.textContent = `x${life} ❤️`;
  }, 200);
  titMessage.textContent = message;
  return life;
};

//Functions that control suggestion

const suggestionL = function (message) {
  divBar.style.backgroundColor = "#0634ff";
  divBar.textContent = message;
  divBar.classList.add("move-cl");
  setTimeout(function () {
    divBar.classList.remove("move-cl");
    divBar.style.backgroundColor = "#eee";
  }, 1500);
};
const suggestionH = function (message) {
  divBar.style.backgroundColor = "#ff0000";
  divBar.textContent = message;
  divBar.classList.add("move-cr");
  setTimeout(function () {
    divBar.classList.remove("move-cr");
    divBar.style.backgroundColor = "#eee";
  }, 1500);
};

//Function that control no number input
const noNumber = function (message) {
  titMessage.textContent = message;
  inGuess.classList.add("error2");
  titMessage.classList.add("error1");
  setTimeout(function () {
    inGuess.classList.remove("error2");
    titMessage.classList.remove("error1");
  }, 200);
};

//Function that control the win
const correctNumber = function (life, message) {
  life = life + 1;
  parLife.textContent = `x${life} ❤️`;
  titMessage.textContent = message;
  divNumber.textContent = SECRET_NUMBER;
  divNumber.classList.add("win");
  setTimeout(function () {
    divNumber.classList.remove("win");
  }, 5000);
  body.style.backgroundColor = "#60b347";
  btnLevNext.classList.remove("hidden");
  return life;
};

//Function tha control the win at the first time
const correctNumberAtFirst = function (life, message) {
  life = life + 1;
  parLife.textContent = `x${life} ❤️`;

  titMessage.textContent = message;
  divNumber.textContent = SECRET_NUMBER;
  divNumber.classList.add("win1");
  setTimeout(function () {
    divNumber.classList.remove("win1");
  }, 5000);
  body.style.backgroundColor = "#ffbb00";
  btnLevNext.classList.remove("hidden");
  return life;
};

//EVENT CHECK

btnCheck.addEventListener("click", function () {
  const guess = Number(inGuess.value);

  //When  there is no Input
  if (!guess && !win) {
    if (life > 0) {
      noNumber("⛔️ No! Number");
    }

    //When the number is correct
  } else if (guess === SECRET_NUMBER && !win && life > 0) {
    win = true;

    if (life === topLife) {
      //Incraese the score and calculate the highScore
      score = score + life * POINT * 2;
      parScore.textContent = score;

      if (score > highscore) {
        highscore = score;
        parHighscore.textContent = highscore;
      }
      life = correctNumberAtFirst(life, "😎 You are the best!!");
    } else {
      //Incraese the score and calculate the highScore
      score = score + life * POINT;
      parScore.textContent = score;

      if (score > highscore) {
        highscore = score;
        parHighscore.textContent = highscore;
      }
      life = correctNumber(life, "🎉 Correct Number!");
    }

    //When the number is too high
  } else if (guess > SECRET_NUMBER) {
    if (life > 1 && !win) {
      life = scoreDecrease(life, "📈 Too High!");
      suggestionH("📈");
    } else if (!win && life === 1) {
      loseGame();
      life = life - 1;
    }

    //When the number is too low
  } else if (guess < SECRET_NUMBER) {
    if (life > 1 && !win) {
      life = scoreDecrease(life, "📉 Too Low!");
      suggestionL("📉");
    } else if (!win && life === 1) {
      loseGame();
      life = life - 1;
    }
  }
});

//EVENT AGAIN

btnAgain.addEventListener("click", function () {
  topLife = 5;
  life = 5;
  win = false;
  score = 0;
  parScore.textContent = score;
  parLife.textContent = `x${life} ❤️`;
  SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
  divNumber.textContent = "?";
  divNumber.classList.remove("win");
  divNumber.classList.remove("win1");
  titMessage.textContent = "Guess My Number!";
  body.style.backgroundColor = "#222";
  inGuess.value = "";
  btnLevNext.classList.add("hidden");
  level = 1;
  titLevel.textContent = `level ${level}`;
  btnRank.classList.add("hidden");
  btnAgain.classList.add("hidden");
});

//EVENT NEXT LEVEL
btnLevNext.addEventListener("click", function () {
  level = level + 1;
  titLevel.textContent = `level ${level}`;
  topLife = life;
  win = false;
  SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
  divNumber.textContent = "?";
  divNumber.classList.remove("win");
  divNumber.classList.remove("win1");
  titMessage.textContent = "Guess My Number!";
  body.style.backgroundColor = "#222";
  inGuess.value = "";
  btnLevNext.classList.add("hidden");
});

//EVENT OPEN GAME INFO
btnGameInfo.addEventListener("click", openModalGameInfo);

//EVENT CLOSE GAME INFO
btnCloseModal[0].addEventListener("click", closeModalGameInfo);
divOverlay.addEventListener("click", closeModalGameInfo);

//EVENT OPEN RANK INFO
btnRank.addEventListener("click", openModalRank);

//RANK CLOSE RANK INFO
btnCloseModal[1].addEventListener("click", closeModalRank);
divOverlay.addEventListener("click", closeModalRank);
