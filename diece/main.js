//alert("code is working")
var randomNumber1= Math.floor(Math.random() * 6)+1;
var randomDiceImage="dice"+randomNumber1+".jpg";
var randoImagesSource="images/"+randomDiceImage;
var image1= document.querySelectorAll("img")[0];
 image1.setAttribute("src", randoImagesSource);

 var randomNumber2= Math.floor(Math.random() * 6)+1;
 var randoImagesSource2="images/dice"+randomNumber2+".jpg";
  document.querySelectorAll("img")[1].setAttribute("src",randoImagesSource2);
 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHtml="player 1 wins";
 }
 else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHtml="player 2 wins";

 }
 else{

    document.querySelector("h1").innerHtml="Draw";
 }