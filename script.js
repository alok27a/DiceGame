var ran=Math.random();
ran=ran*6;
var a=Math.floor(ran)+1;

var randomDiceImage="dice"+a+".png";
var randomImageSrc="images/"+randomDiceImage;

document.querySelector(".img1").setAttribute("src",randomImageSrc);

var ran2=Math.floor(Math.random()*6)+1;
var imgSrc2="images/"+"dice"+ran2+".png";

document.querySelector(".img2").setAttribute("src",imgSrc2);

if(a>ran2)
{
    document.querySelector(".main").innerHTML="Player 1 wins";
}
if(a<ran2){
    document.querySelector(".main").innerHTML="Player 2 wins";

}
else{
        document.querySelector(".main").innerHTML="Tie";
}


