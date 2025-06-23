// let obj={};
// obj.name="Rohit";
// console.log(obj);

// // keys, value , writable, configurable, enumerable 

// // this will show the property 
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

// // writable :true rehega to value change kar sakte hai 
// // false reha to value change nahi kar sakte hai 

// obj.name="Mohit";
// console.log(obj);   //Chagne ho jayega 
// // configuarabel :true hai to writabale aur enumerable ki value change kar sakte hai 
// // false rehga to change nahi kar sakte hai 



// let obj = {};

// // object ki property ko define karna 
// Object.defineProperty(obj, 'name', {
//     value: "rohit",
//     writable: false,
//     enumerable: true,
//     configurable: true,
// })
// obj.name="mohit";   //writable false rehega to change nahi hoga 
// console.log(obj);



// enumerable (some property to hide )
// jo false hoga wo keys show nahi hoga 
// only jiska enumerable true hoga wahi key print hoga (inherit ka bhi aise hi kam karega )

// sabhi object apni property inherit krta hai (object.prototype) se 
// Object.prototype ki keys ko print nahi karta hai kyunki oska enumerable false hota hai 
const obj={
    name:"rohit",
    age:34,
    account_number:23209,
    balnce:5000
};

Object.defineProperty(obj,'name',{
    enumerable:false,
})


for(let key in obj)
{
    console.log(key);
}


// toString ka enumerable: false, ata hai 
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
})
// yehan ye true ban jayega 
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));

for(let key in obj)
{
    console.log(key);
}



