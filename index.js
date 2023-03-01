
var randomNumber = Math.floor(Math.random() * 6 + 1);

var randomDice = "dice" + randomNumber + ".png";

var randomimgSource = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimgSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomimgSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimgSource2);

if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML = "🎉 Player 1 Won!" ;
}

else if(randomNumber == randomNumber2)
{
    document.querySelector("h1").innerHTML = "✨ DRAW ! ✨" ;
}

else{
    document.querySelector("h1").innerHTML = "Player 2 Won! 🎉" ;
}