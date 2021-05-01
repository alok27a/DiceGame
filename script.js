var ran1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + ran1 + ".png";
var randomImageSrc = "images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src", randomImageSrc);

var ran2 = Math.floor(Math.random() * 6) + 1;
var imgSrc2 = "images/" + "dice" + ran2 + ".png";

document.querySelector(".img2").setAttribute("src", imgSrc2);


if (ran1 ==ran2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
if (ran1 < ran2) {
  document.querySelector("h1").innerHTML = "Player 2 wins🚩";
} else {
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
