let num1=6
let num=8
document.getElementById("numbers").innerText=num1;
document.getElementById("numbers2").innerText=num;


let sumEl=document.getElementById("sum-El")
function add(){
    let result= num1 + num
    sumEl.textContent="sum :" +result
   
    
    
}


function substract(){
    let result=num1-num
    sumEl.textContent="sum :" +result
   
    
    
    
}



function multiply(){
    let result=num1*num
    sumEl.textContent="sum :" +result
   
    
    
    
}



function division(){
    let result=num1/num
    sumEl.textContent="sum :" +result
  
    
    
    
}
