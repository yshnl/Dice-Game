//to get random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//to get dice 1-6 image from randomNumber1 generated
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

//to change dice image according to randomNumber generated js DOM
var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomDiceImage1);


//to get random number between 1 and 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//to get dice 1-6 image from randomNumber1 generated
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

//to change dice image according to randomNumber generated / js DOM setAttribute
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


//to change h1 title according to randomNumber generated / ßjs DOM innerHTML
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "&#x1F3C1 Player 1 WINS";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 WINS &#x1F3C1";
}
else {
  document.querySelector("h1").innerHTML = "DRAW"
}
