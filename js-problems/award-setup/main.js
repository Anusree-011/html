function awardPrizes(names) {
    const [gold,silver,bronze] = Object.values(names).sort((num1,num2)=>num2-num1);
    
 

const namesArr = Object.entries(names);
 const results=namesArr.map(([name,score])=> {
    console.log(score);
    switch(score) {
        case gold:
            return[name,"Gold"];
            case silver:
            return[name,"Silver"];
            case bronze:
            return[name,"Bronze"];
            default:
                return[name,"participation"];
            
            
    }
});
const finalresults=Object.fromEntries(results);
console.log(finalresults);
}
awardPrizes({
    joshua:45,
    alex:35,
    eric:43, 

});