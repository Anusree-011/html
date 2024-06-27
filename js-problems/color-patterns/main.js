const  colorPattrenTimes=(colors)=>{
    let totalTime=colors
    .map((color,index,arr) =>(color!==arr [index +1] ? 1:0))
    .slice(0,-1)
    .reduce((acc,number)=>acc+number,colors.length*2);
    return totalTime;
};

    //let switchpencilTime=0;
//for (i=0;i<colors.length -1; i++){
   // for(j=1;j<=i+1;j++){
       // if(colors[i] !==colors[j]){
           // switchpencilTime++;
       // }
        //}
//}const timeTocolorAsqure=colors.length*2;
//return switchpencilTime+ timeTocolorAsqure; 
//console.log(switchpencilTime);
//};
let result=colorPattrenTimes(["Red","yellow","blue","green"]);

console.log(result);

