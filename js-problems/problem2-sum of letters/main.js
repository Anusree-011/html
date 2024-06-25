console.clear()
  let solution=(number)=>{
  let oneToNine =['one','two','three','four','five','six','seven','eight','nine']
  
let tentoninteen =['eleven','televe','thirteen','fourteen','fifteen','sixteen','seventeen','eifhteen','ninteen']

let allnumbers=[...oneToNine,...tentoninteen]
  console.log(allnumbers)
  let selectedNumbers=oneToNine.slice(0,number)
  console.log(selectedNumbers)
    let selectedNumbersLength=selectedNumbers.map((text)=>text.length).reduce((num,acc)=>num+acc)
    console.log(selectedNumbersLength)
  }

let result=solution(12)
console.log(result)