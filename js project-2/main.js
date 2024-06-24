let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemslist = document.getElementById("kitchen-items-list");
function addkitchenItems(event) {
    let kitchenInputData = kitchenInput.value;
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
    li.appendChild( editBtn);
}

function deletekitchenItem(event){
    if(event.target.classList[0]==="fas"){
    let item= event.target.parentElement;
    item.remove();
    }
   }
   

   
 
addBtn.addEventListener('click', addkitchenItems);  
kitchenItemslist.addEventListener('click',deletekitchenItem);