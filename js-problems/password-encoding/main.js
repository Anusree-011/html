function isLowercaseonly(userinput){
const lowercaseonly =/^[a-z]+$/g;

const testpassed=lowercaseonly.test(userinput);
return testpassed;
}
console.log(isLowercaseonly("mubashirh "));

function secretepassword(userinput){
    console.log(secretepassword)
    //setp 1 
    if(!isLowercaseonly(userinput) || userinput.length !==9){
console.log("Bang Bang"); 
    }
    //step 2

const splitedarr=userinput.match(/[a-z]{1,3}/g);
console.log(splitedarr);
 }

secretepassword=("mubashirh");