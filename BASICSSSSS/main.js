//document.getElementById("demo").innerHTML="10";
// let  myAge=50;
// let humanDogRatio=6;
// let myDogAgeRatio=myAge*humanDogRatio;
// console.log(myDogAgeRatio)
//function increment(){
    //console.log("botton was clicked")
//}
let saveEl=document.getElementById("save-El")
let demo=document.getElementById("demo");
let count=0;


function increment(){
    count+=1;
    demo.innerHTML=count;
}
console.log(increment)

function save(){
    let totalCount=  count +"-" ;
    saveEl.innerHTML += totalCount;

    console.log(count)
}
