function solution(number){
    let mutlipleOfThree=[]
    let mutlipleOfFive=[]
    for(let i=1;i<number;i++){
       if(i%3 == 0) {
        mutlipleOfThree.push(i)
           
       }
       if(i%5 == 0) {
        
        mutlipleOfFive.push(i)
        
    
    }
    }
    let wholeFivesandThrees=[...mutlipleOfThree,...mutlipleOfFive]
    console.log(wholeFivesandThrees)
    
   let filterdFivesAndThrees=[...new Set(wholeFivesandThrees)]
 console.log(filterdFivesAndThrees)
 let sumofFivesandThrees=filterdFivesAndThrees.reduce((num,acc)=>num+acc)
      return sumofFivesandThrees

   }
   
   let result=solution(20)
   console.log("The final result is",result)