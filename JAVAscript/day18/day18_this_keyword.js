// this keyword
// The this keyword in javascript is specisl keyword that refers to the context in which the curent code is being executed


// *****************************1.Global object ****************************************//
// {Jo bhi likha hai wo global object ke madaad se ata hai (jaise console.log("hellwo")}
// global object ka name har jagah alag alg ho skta hai

// 1.Chrome browser : window(sab kuch window ka part hai );
// 2.Nodejs:global 

// 3.globalthis:-har environment me use kar sakte hai (global object ko point karta hai )
// console.log(globalThis.Math.random());

// // **************************this keyword **************************************//
// // jo enviroment hai oske hisab se meaning cahnge hoga iska 

// // global scaope ka part hai 
// let a = 10;
// const b = 20;

// // global object ka part hai 
// var c = 30;

// console.log(this.c);
// console.log

// ye global scope ka part nahi hai 
// function main(){
//     console.log("hellow")
// }


// **********************************2.Inside a function********************************//
// i.Non Strict StrictMode
// ii.Strict mode 


// ************************************************
// ye hai non strict mode (by default )
// function greet() {
//     console.log(this);
// }
// greet();
// ye global object ko refer karega 


// *****************************************
// "use strict"
// function greet() {
//     console.log(this);
// }
// greet();
// this keyword is undefined inside the function ho jayega 

// ****************************************3.Inside a Object (Method)********************************//
// const obj = {
//     name: "Rohit",
//     age: 34,

//     // ye this object ko hi point karega 
//     greet: function () {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// obj.greet();

// ***********************Arrow fucntion **********************************************//
// iska ka khudka this keyword nahi hota hai 
// Instead they inherit this keyword from the surrounding(lexcical ) scope

// const obj = {
//     name: "Rohit",
//     age: 34,

//     // ye surrounding me se this lega (yehan window ayega ) 
//     greet: () => {
//         console.log(this);
//     }
// }
// obj.greet();


// const obj = {
//     name: "Rohit",
//     age: 34,
//     // ye function ka hi this le lega  
//     greet: function () {
//         let ab = () => {
//             console.log(this);
//         };
//         ab();
//     }
// }
// obj.greet();


//************************** */ 4.Inside a constructor or Class *************************************//
// In constructor and class ,this refers to the instance of the object being created 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let a = new Person("Rohit", 20);


