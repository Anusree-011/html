

let quizdata=[
    {
        question:"most popular programming Language?",
        a:"C",
        b:"python",
        c:"javascript",
        answer:"c"

    },
    
    {},
    {}
]
let title=document.querySelector('.title')
let aLabel=document.querySelector('.aLabel')
let bLabel=document.querySelector('.bLabel')
let cLabel=document.querySelector('.cLabel')
let submitBtn=document.getElementById("submit") 
let answers=document.querySelectorAll(".answer")


function displayquestionAnswers(){

title.innerHTML=quizdata[0].question
aLabel.innerHTML=quizdata[0].a
bLabel.innerHTML=quizdata[0].b
cLabel.innerHTML=quizdata[0].c
   
} 
function submitAnswer() {
    submitBtn.addEventListener("click", function(){
      
        
    })
   
        
         
         
    
}
    function getUserAnswer(){
        let userAnswer
        answers.forEach(function(answer){
           
            if(answer.checked ===true) {
                userAnswer = answer.id
            }

        
    })  

console.log(userAnswer)

    }
displayquestionAnswers()
submitAnswer ()
