let obj = {
    name: "Rohit",
    age: 12,
    gender: "male",
    city: "madhubani"
}

// for in loop (iterate over keys in an object )
// for(let key in obj)
// {
//     console.log(key,obj[key]);
// }
// console.log(Object.keys(obj));  //Is se bhi keys nikal sate hai 
// // Difference betweeen the two are 


// create me obj se inherit hoga property (is se protype create hota hai )
let obj1 = Object.create(obj);
obj1.money = 1000;
obj1.balance = 500;
// console.log(obj1);  //Is se show inherit property show nahi hoga 
// console.log(obj1.name);

// console.log(Object.keys(obj1)); //Sirf obj1 ka hi keys print karega (inherit wala print nahi kareaga )

// ye loop pura print kara dega 
for(let key in obj1)
{
    console.log(key,obj1[key]);
}



