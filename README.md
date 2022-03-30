`version: 1.7`

# GuessMyNumber

<p align= "center"><img src = "https://i.imgur.com/5Pu7MYG.png" alt="Guess My Number"></p>

## Introduction

This is a small project, which implements through the logic of java scrip a game which consists in guessing a random number.

---

## Behavior

<p align= "center"><img src ="https://i.ibb.co/48mndj7/start.png" alt="Guess My Number" ></p>

The game has a levels logic, each game starts with five lives and you have to guess the number (random between 1-20) within the lives you have.
Each game starts with five lives and you have to guess the number within the lives you have.
For each 5 level you can play a bonus level which consists in guessing a number among the three suggested.

**!!! Try to beat your best score !!!!**

---

### Management of lives

| Status             | ❤️  |
| ------------------ | :-: |
| Start Game         |  5  |
| Lost Game          |  0  |
| Win Level          | +1  |
| Don't guess number | -1  |
| Win Bonus Level    | +7  |
| Lost Bonus Level   | +0  |

### Management of Score

| Status             | Score                 |
| :----------------- | :-------------------- |
| Win Level          | 50 points x life      |
| Win Level at first | (50 points x life) x2 |
| Win Level Bonus    | 50 points x3          |

---

# Gallery

## When you win

<img src="https://i.ibb.co/cLn93mk/win1.png" alt="Guess My Number" >

## When you win at first

<img src="https://i.ibb.co/PD9SJyq/win.png" alt="Guess My Number" >

## Level Bonus

<img src="https://i.ibb.co/kxq15Ms/bonus.png" alt="Guess My Number" >

## When you lose

<img src="https://i.ibb.co/LN6fw7C/lost.png" alt="Guess My Number" >




/* CSV */
eeeeee,60b347,ffbb00,ff0000,6200ff,0634ff,222222

/* With # */
#eeeeee, #60b347, #ffbb00, #ff0000, #6200ff, #0634ff, #222222

/* Array */
["eeeeee","60b347","ffbb00","ff0000","6200ff","0634ff","222222"]

/* Object */
{"Cultured":"eeeeee","Green RYB":"60b347","Selective Yellow":"ffbb00","Red":"ff0000","Electric Indigo":"6200ff","Blue RYB":"0634ff","Eerie Black":"222222"}

/* Extended Array */
[{"name":"Cultured","hex":"eeeeee","rgb":[238,238,238],"cmyk":[0,0,0,7],"hsb":[0,0,93],"hsl":[0,0,93],"lab":[94,0,0]},{"name":"Green RYB","hex":"60b347","rgb":[96,179,71],"cmyk":[46,0,60,30],"hsb":[106,60,70],"hsl":[106,43,49],"lab":[66,-46,46]},{"name":"Selective Yellow","hex":"ffbb00","rgb":[255,187,0],"cmyk":[0,27,100,0],"hsb":[44,100,100],"hsl":[44,100,50],"lab":[80,12,82]},{"name":"Red","hex":"ff0000","rgb":[255,0,0],"cmyk":[0,100,100,0],"hsb":[0,100,100],"hsl":[0,100,50],"lab":[53,80,67]},{"name":"Electric Indigo","hex":"6200ff","rgb":[98,0,255],"cmyk":[62,100,0,0],"hsb":[263,100,100],"hsl":[263,100,50],"lab":[38,81,-99]},{"name":"Blue RYB","hex":"0634ff","rgb":[6,52,255],"cmyk":[98,80,0,0],"hsb":[229,98,100],"hsl":[229,100,51],"lab":[37,64,-99]},{"name":"Eerie Black","hex":"222222","rgb":[34,34,34],"cmyk":[0,0,0,87],"hsb":[0,0,13],"hsl":[0,0,13],"lab":[13,0,0]}]

/* XML */
<palette>
  <color name="Cultured" hex="eeeeee" r="238" g="238" b="238" />
  <color name="Green RYB" hex="60b347" r="96" g="179" b="71" />
  <color name="Selective Yellow" hex="ffbb00" r="255" g="187" b="0" />
  <color name="Red" hex="ff0000" r="255" g="0" b="0" />
  <color name="Electric Indigo" hex="6200ff" r="98" g="0" b="255" />
  <color name="Blue RYB" hex="0634ff" r="6" g="52" b="255" />
  <color name="Eerie Black" hex="222222" r="34" g="34" b="34" />
</palette>
