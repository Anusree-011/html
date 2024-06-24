let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemslist = document.getElementById("kitchen-items-list");
let kitchenInputData ;
let kitchenInputDataArray =[kitchenInputData];
 function setlocalStorage(){
    localStorage.setItem("kitchen Input", kitchenInputDataArray);
 }

 function getlocalStorage() {
    if(localStorage.getItem("kitchen Input")) {
        kitchenInputData = localStorage.getItem("kitchen Input");
        buildUI(); 
        console.log("data found");
 } else  {
 
    console.log("no data found");
 }
}
 function buildUI()
 {
    let li=document.createElement("li")
   li.innerText= kitchenInputData;
   li.style.cssText= "animation-name:slideIn; ";
   kitchenItemslist.appendChild(li);
   kitchenInput.value="";
   kitchenInput.focus();
   let trashBtn = document.createElement('i');
    trashBtn.classList.add('fas','fa-trash'); 
    li.appendChild(trashBtn);
    console.log(trashBtn);
    let editBton=document.createElement('i');
    editBton.classList.add('fas','fa-edit')
    li.appendChild(editBton);
        
 }
 
 function addkitchenItems(event) {
      kitchenInputData = kitchenInput.value;
      kitchenInputDataArray.push(kitchenInputData )
      console.log(kitchenInputDataArray )
    setlocalStorage();
    setlocalStorage(); 
    

   
}

function deletekitchenItem(event){
    if(event.target.classList[0]==="fas"){
    let item= event.target.parentElement;
    item.remove();
    }
   }
   

   getlocalStorage();
 
addBtn.addEventListener('click', addkitchenItems);  
kitchenItemslist.addEventListener('click',deletekitchenItem);


