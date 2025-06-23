// object key value pair me store hota hai 
// jo key hota hai wo string hi hota hai (dont think as variable)
const obj = {
    "name": "Deepak",    //ye as string store hoga 
    account_balance: 234,
    age: 22,

    // key me sapce deke nahi likh sakte hai 
    // as a string likh sakte hai 
    "account number": 12344,

    // ye number bhi use kar sakte hai (isme bhi 0 1 and 2 string ki tarah hi store hoga )
    0: 23,
    1: 45,
    2: 667,

    // isko bhi acces kar sakte hai (but dont use this )
    undefined: 34,
    null: "Deepak"
}
console.log(typeof obj);

// accessing the element 
console.log(obj.name);
console.log(obj["name"]);   //isme always string dena hai ("name")
console.log(obj["account number"]);

console.log(obj[0]);
console.log(obj["2"]);  //As a string bhi likh sakte hai

// key as undefined (ye bhi string me convert ho jayega )
console.log(obj.undefined);
console.log(obj[undefined]);
console.log(obj["undefined"]);

// Array implimentation object ke jaisa hi hai 
const arr = [23, 45, 56, 67];
// Array internal implementation 
// let arr={
//     0:23,
//     1:45,
//     2:56,
//     3:67,
//      lenght:4
// }
console.log(arr[0], obj[0])


// this will create the object 
const person = new Object();

// property add 
person.name = "Deepak";
person.age = 22;
person.gender = "Male";
// delete the property 
delete person.age;
// modify the property 
person.name = "Mohit";
console.log(person);


// making object by using class 
class people {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let per1 = new people("Deepak", 12, "Male");
let per2 = new people("Mohit", 20, "Male");
console.log(per1, per2);


// Common methods for Object 
let obj1 = {
    name: "Rohit",
    account_balance: 40309,
    gender: "Male"
}
// Object.keys(obj1) will return the the keys of Object (Array ke form me return deta hai )
const arr1 = Object.keys(obj1);
console.log(arr1);
const arr_value = Object.values(obj1);
console.log(arr_value);

// keys and value but in form of array 
const arr2=Object.entries(obj1);
console.log(arr2);

// Assing use casse (to combine two object )
const obj11={a:1,b:2};
const obj22={c:3,d:4};
// const obj33=Object.assign(obj11,obj22); // obj11 change ho jayega 
// console.log(obj33,obj11);

// yehan change nahi hpga 
const obj3=Object.assign({},obj11,obj22); //kahli object me assing hoga
console.log(obj3,obj11); 


// we can use spread operator (pehle spread karega fir combine karega )
const arr5={...obj11,...obj22};
console.log(arr5);




