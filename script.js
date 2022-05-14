"use strict";
console.log("Copyright© 2022 BidGame");

//VARIABLE INIZIALIZATION

//Game variables
const POINT = 50;
let [secretNumber, level, life, topLife, score, win] = [0, 1, 5, 5, 0, false];
//Random Number between 1-20
secretNumber = Math.trunc(Math.random() * 20) + 1;

//Rank variables
let [game, text] = [0, ""];

//Storage HighScore
let highscore = 0;
if (localStorage.getItem("highscore") != null) {
  highscore = localStorage.getItem("highscore");
  document.querySelector(".highscore").textContent = highscore;
}

//Game bonus variables
let [bonusNumber, inBonus, bonusFinish] = [0, false, false];
const levelCheck = 5;
const bonusNumbers = new Array();

//------------------------------------------------//
//--------- HTML ELEMENTS ------------------------//
//------------------------------------------------//

//<body>
const body = document.querySelector("body");

// <h1>
const titLevel = document.querySelector(".game-liv");
const titMessage = document.querySelector(".game-tit");

// <p>
const parLife = document.querySelector(".life");
const parHighscore = document.querySelector(".highscore");
const parScore = document.querySelector(".score");
const parRanking = document.querySelector(".ranking");

// <div>
const divNumber = document.querySelector(".number");
const divBar = document.querySelector(".bar");
const divModal = document.querySelectorAll(".modal");
const divOverlay = document.querySelector(".overlay");

// <input>
const inGuess = document.querySelector(".guess");

// <button>
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnGameInfo = document.querySelector(".info-game");
const btnRank = document.querySelector(".rank");
const btnLevNext = document.querySelector(".lev-next");

//------------------------------------------------//
//--------- MODAL CONTROL FUNCTION ---------------//
//------------------------------------------------//

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

//------------------------------------------------//
//--------- GAME FUNCTION ------------------------//
//------------------------------------------------//

//Function that control  when lost the game
const loseGame = function () {
  //1) Mod Homepage
  titMessage.textContent = "😭 GAME OVER!";
  body.style.backgroundColor = "#ff0000";
  divNumber.textContent = secretNumber;
  parLife.textContent = `x${0} ☠️`;
  //2) Mod Rank
  btnRank.classList.remove("hidden");
  game = game + 1;
  text = parRanking.textContent;
  text = text + ` - - - Game: ${game} Level: ${level} Score: ${score} - - -`;
  parRanking.textContent = text;
  //3) Save the highscore
  localStorage.setItem("highscore", highscore);
};

//Function that control life decrease
const lifeDecrease = function () {
  //1) Decrase life
  life = life - 1;
  //2)Visual effects
  parLife.textContent = `x${life} 💔`;
  parLife.classList.add("error1");
  divNumber.classList.add("error");
  setTimeout(function () {
    parLife.classList.remove("error1");
    divNumber.classList.remove("error");
    parLife.textContent = `x${life} ❤️`;
  }, 200);
};

//Functions that control suggestion

const suggestion = function (message) {
  //1) set the suggestion text
  titMessage.textContent = message;
  titMessage.classList.add("error1");
  setTimeout(function () {
    titMessage.classList.remove("error1");
  }, 200);

  //2)set the animated tip
  if (arguments[1] === 1) {
    //Argument 1 Suggestion  Low a little
    divBar.style.backgroundColor = "#066eff";
    divBar.textContent = "📉";
    divBar.classList.add("move-cl");
    setTimeout(function () {
      divBar.classList.remove("move-cl");
      divBar.style.backgroundColor = "#eee";
    }, 1500);
  } else if (arguments[1] === 2) {
    //Argument 2 Suggestion  Low
    divBar.style.backgroundColor = "#0634ff";
    divBar.textContent = "📉";
    divBar.classList.add("move-cl");
    setTimeout(function () {
      divBar.classList.remove("move-cl");
      divBar.style.backgroundColor = "#eee";
    }, 1500);
  } else if (arguments[1] === 3) {
    //Argument 3 Suggestion  heigh a little
    divBar.style.backgroundColor = "#ff2a00";
    divBar.textContent = "📈";
    divBar.classList.add("move-cr");
    setTimeout(function () {
      divBar.classList.remove("move-cr");
      divBar.style.backgroundColor = "#eee";
    }, 1500);
  } else if (arguments[1] === 4) {
    //Argument 3 Suggestion  heigh
    divBar.style.backgroundColor = "#ff0000";
    divBar.textContent = "📈";
    divBar.classList.add("move-cr");
    setTimeout(function () {
      divBar.classList.remove("move-cr");
      divBar.style.backgroundColor = "#eee";
    }, 1500);
  }
};

//Function that control no number input
const noNumber = function () {
  if (arguments[0] !== undefined) {
    titMessage.textContent = arguments[0];
  }
  inGuess.classList.add("error2");
  titMessage.classList.add("error1");
  setTimeout(function () {
    inGuess.classList.remove("error2");
    titMessage.classList.remove("error1");
  }, 200);
};

//Function that control the win
const correctNumber = function (message) {
  life = life + 1;
  parLife.textContent = `x${life} ❤️`;
  parLife.classList.add("up-life");
  setTimeout(function () {
    parLife.classList.remove("up-life");
  }, 200);
  titMessage.textContent = message;
  divNumber.textContent = secretNumber;
  divNumber.classList.add("win");
  setTimeout(function () {
    divNumber.classList.remove("win");
  }, 5000);
  body.style.backgroundColor = "#60b347";
  btnLevNext.classList.remove("hidden");
};

//Function tha control the win at the first time
const correctNumberAtFirst = function (message) {
  life = life + 2;
  parLife.textContent = `x${life} ❤️`;
  parLife.classList.add("up-life");
  setTimeout(function () {
    parLife.classList.remove("up-life");
  }, 200);
  titMessage.textContent = message;
  divNumber.textContent = secretNumber;
  divNumber.classList.add("win1");
  setTimeout(function () {
    divNumber.classList.remove("win1");
  }, 5000);
  body.style.backgroundColor = "#ffbb00";
  btnLevNext.classList.remove("hidden");
};

//------------------------------------------------//
//--------- GAME BONUS FUNCTION ------------------//
//------------------------------------------------//

//Function that control when lost the level bonus
const loseBonus = function (message) {
  titMessage.textContent = message;
  divNumber.textContent = bonusNumber;
  body.style.backgroundColor = "#ff0000";
  btnLevNext.classList.remove("hidden");
};

//Function that control the win of bonus level
const correctBonusNumber = function (message) {
  life = life + 7;
  parLife.textContent = `x${life} ❤️`;
  parLife.classList.add("up-life");
  setTimeout(function () {
    parLife.classList.remove("up-life");
  }, 200);
  titMessage.textContent = message;
  divNumber.textContent = bonusNumber;
  divNumber.classList.add("win1");
  setTimeout(function () {
    divNumber.classList.remove("win1");
  }, 5000);
  body.style.backgroundColor = "#60b347";
  btnLevNext.classList.remove("hidden");
};

//------------------------------------------------//
//--------- GAME EVENTS --------------------------//
//------------------------------------------------//

//EVENT CHECK
btnCheck.addEventListener("click", function () {
  const guess = Number(inGuess.value);

  if (inBonus) {
    //When  there is no Input
    if (!guess && !bonusFinish) {
      noNumber();
      //When the number is correct
    } else if (guess === bonusNumber && !bonusFinish) {
      bonusFinish = true;
      score = score + POINT * 3;
      parScore.textContent = score;

      if (score > highscore) {
        highscore = score;
        parHighscore.textContent = highscore;
      }
      correctBonusNumber("🎉 Correct Number!");

      //When the number isn't correct
    } else if (guess != bonusNumber && !bonusFinish) {
      loseBonus("😅 Ops...");
      bonusFinish = true;
    }
  } else {
    //When  there is no Input
    if ((guess < 1 || guess > 20 || !guess) && !win) {
      if (life > 0) {
        noNumber("⛔️ No! Number");
      }

      //When the number is correct
    } else if (guess === secretNumber && !win && life > 0) {
      win = true;

      if (life === topLife) {
        //Incraese the score and calculate the highScore
        score = score + life * POINT * 2;
        parScore.textContent = score;

        if (score > highscore) {
          highscore = score;
          parHighscore.textContent = highscore;
        }
        correctNumberAtFirst("😎 Supreme champion!");
      } else {
        //Incraese the score and calculate the highScore
        score = score + life * POINT;
        parScore.textContent = score;

        if (score > highscore) {
          highscore = score;
          parHighscore.textContent = highscore;
        }
        correctNumber("🎉 Correct Number!");
      }

      //When the number is high
    } else if (guess > secretNumber) {
      if (life > 1 && !win) {
        if (guess - secretNumber <= 2) {
          lifeDecrease();
          suggestion("📈 Almost there!", 3);
        } else {
          lifeDecrease();
          suggestion("📈 Too High!", 4);
        }
      } else if (!win && life === 1) {
        life = life - 1;
        loseGame();
      }

      //When the number is  low
    } else if (guess < secretNumber) {
      if (life > 1 && !win) {
        if (secretNumber - guess <= 2) {
          lifeDecrease();
          suggestion("📉 Almost there!", 1);
        } else {
          lifeDecrease();
          suggestion("📉 Too Low!", 2);
        }
      } else if (!win && life === 1) {
        life = life - 1;
        loseGame();
      }
    }
  }
});

//-------------------------------------------------//

//EVENT NEXT LEVEL
btnLevNext.addEventListener("click", function () {
  level = level + 1;

  if (level % levelCheck === 0) {
    //i'am in bonus level
    //1) set the template for bonus level
    titLevel.textContent = `level Bonus`;
    divNumber.textContent = "☆";
    divNumber.classList.remove("win");
    divNumber.classList.remove("win1");
    body.style.backgroundColor = "#6200ff";
    inGuess.value = "";
    btnLevNext.classList.add("hidden");

    //2)set the variables
    [bonusFinish, inBonus] = [false, true];

    let flag = false;

    while (!flag) {
      bonusNumbers[0] = Math.trunc(Math.random() * 78) + 21;
      bonusNumbers[1] = Math.trunc(Math.random() * 78) + 21;
      bonusNumbers[2] = Math.trunc(Math.random() * 78) + 21;

      if (
        bonusNumbers[0] != bonusNumbers[1] &&
        bonusNumbers[0] != bonusNumbers[2] &&
        bonusNumbers[1] != bonusNumbers[2]
      ) {
        flag = true;
      }
    }
    let bonusCheck = Math.trunc(Math.random() * 3);
    bonusNumber = bonusNumbers[bonusCheck];
    titMessage.textContent = `${bonusNumbers[0]}-${bonusNumbers[1]}-${bonusNumbers[2]} ?`;
  } else {
    //i'am in a normal level
    //1) Set the variables
    [bonusFinish, inBonus] = [false, false];
    titLevel.textContent = `level ${level}`;
    [secretNumber, win] = [0, false];
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    topLife = life;

    //2) set the template for normal level
    divNumber.textContent = "?";
    divNumber.classList.remove("win");
    divNumber.classList.remove("win1");
    titMessage.textContent = "Guess My Number!";
    body.style.backgroundColor = "#222";
    inGuess.value = "";
    btnLevNext.classList.add("hidden");
  }
});

//------------------------------------------------//

//EVENT AGAIN
btnAgain.addEventListener("click", function () {
  //1)Reset game and bonus variables
  [secretNumber, level, life, topLife, score, win] = [0, 1, 5, 5, 0, false];
  //Random Number between 1-20
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Storage HighScore
  highscore = localStorage.getItem("highscore");
  //Game bonus variables
  [bonusNumber, inBonus, bonusFinish] = [0, false, false];

  //2)Reset home-page
  parHighscore.textContent = highscore;
  parScore.textContent = score;
  parLife.textContent = `x${life} ❤️`;
  divNumber.textContent = "?";
  titMessage.textContent = "Guess My Number!";
  body.style.backgroundColor = "#222";
  inGuess.value = "";
  btnLevNext.classList.add("hidden");
  titLevel.textContent = `level ${level}`;
  btnRank.classList.add("hidden");
  divNumber.classList.remove("win");
  divNumber.classList.remove("win1");
});

//------------------------------------------------//
//--------- MODAL CONTROL EVENTS -----------------//
//------------------------------------------------//

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
