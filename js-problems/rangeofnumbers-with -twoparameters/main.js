
let numbersArr=[]
    const rangeOfNumbers=(startNum,endNum)=>{
        
        //for(let i=startNum;i<=endNum;i++){
          //  numbersArr.push(i)
       // }
//return numbersArr
if(startNum>endNum) return
if(startNum<=endNum){
    numbersArr.push(startNum)
    startNum= startNum + 1

}

rangeOfNumbers(startNum,endNum)
return numbersArr
    } 
 localStorage

console.log(rangeOfNumbers(3,10))