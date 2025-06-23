// scope in js 
// global scope,LOcal scope(function scope) ,Block scope 

// this is global scope 
// let a=20;
// var b=40;
// const c=50;

// function greet(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// greet();



// local scope (function ke ander jab banate hai )
// function greet() {
//     let a = 20;
//     var b = 40;
//     const c = 50;
//     console.log("hellow");

// }
// greet();
// console.log(a); //ye access nahi hoga 



// Block scope 
// var multiple value allowed kar deta hai 
// var amount = 400;
// var amount = 99;
// if (true) {
//     let a = 20;
//     var b = 40;
//     const c = 50;

// }
// // console.log(a);
// // console.log(c);
// console.log(b); //Ye access ho jata hai (problem create karta hai )


for(let i=0;i<5;i++){
    console.log(i);
}

// global scope me do Element same name ka nhai ho sakte hai 
let amount=400;
// let amount=500;     //Ye nahi ho sakta hai 

if(true){
    let amount=5000;    //Iska scope change ho gya hai 
    console.log(amount);
}


// Function banane se pehle bhi access ho jayega 
// greet();
// function greet(){
//     console.log("Hellow greet");
// }

// // function se pehle access nahi hoga 
// meet();
// const  meet=function(){
//     console.log("Hellow meet");
// }






