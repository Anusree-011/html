console.clear()

let users={
    alan:{
        age:27,
        online:false
    },
    jeff:{
        age:32,
        online:true
    },
    ammu:{

  age:48,
  online:false
    }
     
    
        
};
const solution=(data)=>{
    let names=[]
    for(property in data){
        names.push(property)
        console.log(property)
    }
    return names

}
console.log(solution(users))