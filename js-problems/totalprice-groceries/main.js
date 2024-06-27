//global data
const groceries =[
    {product:"Milk", quamtity:1,pricr:1.5},
    {product:"cereals",quantity:1,price:2.5},
];



//get total price of groceries


const getTotalPrice =(groceries) => {
    let totalcost=groceries.map((item)=> {
        return Object.values(item)
        .slice(-2)
        .reduce((acc,num)=>acc*num);
    
    });
    return totalcost.reduce((acc,num)=>acc+num);
};




let result=getTotalPrice(groceries)
    