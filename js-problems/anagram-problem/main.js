 const formEl=document.getElementById("form");
 const inputOneEl=document.getElementById("val1");
 const inputTwoEl=document.getElementById("val2");
 const submitBtnEl=document.getElementById("submit");
 const messageEl=document.getElementById("message");

function getData(e){
    e.preventDefault();

    const inputOneval= inputOneEl.value;
    const inputTwoval= inputOneEl.value;
    console.log(inputOneval,inputTwoval);
    //if(isAngram(inputOneval,inputTwoval)){
        //messageEl.innerHTML="Yes,These text are Angram"
   // }
   // else{
       // messageEl.innerHTML="No,These text are not Angram"
   // } 
    }


  formEl.addEventListener("submit", getData);
 
 
 
 function isAngram(text1,text2){
    const text1AsArr=text1.trim().toLowerCase().split("").sort();
    const text2AsArr=text2.trim().toLowerCase().split("").sort();
return Array.isArray(text1AsArr)&&
text1AsArr.length===text2AsArr.length &&
text2AsArr.every((val,index)=>val===text2AsArr[index])
? true
:false;
 
 }
 console.log (isAngram("cristian","cristina"));
