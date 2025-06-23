// const obj1={
//     a:1,
//     b:2
// }
// // Shallow copy (only refernce is passed to the obj2 )
// let obj2=obj1;
// obj2.a=10;
// console.log(obj1,obj2); //Changes will happen in main

// // deep copy 
// let obj3=structuredClone(obj1); //Ek naya object banega 
// obj3.a=24;
// console.log(obj1,obj3); //Object 1 change nahi hoga 


// Nested object 
// const user={
//     name:"Rohit",
//     balance:490,
//     adress:{
//         pincode:847424,
//         city:"Madhubani"
//     }
// };
// console.log(user.adress);
// console.log(user.adress.city);


// // creating copy using assing (Deep copy create karega jab nested object nahi hoga to ||main me change nahi hoga )
// // nested object me shallow coopy create hoga (main me change nahi hoga )
// const user2=Object.assign({},user);
// console.log(user2);
// user2.adress.pincode=45463;
// console.log(user.adress.pincode)
// user2.name="DEEPAK";
// console.log(user.name);



// Destructuring of object 
// let obj = {
//     name: "Deepak",
//     money: 456,
//     balance: 30,
//     age: 22

// };

// // Object me jo value rehega wo bracket ke ander jo likha rehga wo aa jayega 
// // const { name, age } = obj;
// // const { name: new_name, age: new_age, balance } = obj;
// // console.log(new_name, new_age, balance);

// // ...obj1 is also called rest operator (jo baki baccha rehega isme chala jayega as object )
// const {name,...obj1}=obj;
// console.log(obj1);

// nested object destructure 
let obj = {
    name: "Deepak",
    age: 22,
    arr:[12,56,67,34],
    adress:{
        pincode:847424,
        city:"Mdhubani",
        state:"Bihar",
    },

    func:function(){
        console.log("Hellow world");
        // ye kuch bhi return nahi karega (undefine ayega jab print karayenge to)
    },
    meet:function(){
        return 20;
    }
};
// const {name}=obj;
const {adress:add}=obj; //Adress ke ander pura object rakha hai 
console.log(add);
const {adress:{pincode}}=obj;   //Adrees ke ander jao aur pincod le lo 
console.log(pincode);

// const {arr:array}=obj;
// console.log(array);
const {arr:[first]}=obj;
console.log(first);

// Function call in object 
obj.func();
console.log(obj.meet());





// Destructuring with array 

// const arr =[2,3,5,6,77];
// // const [first,second]=arr;
// // const [first,second, ,third]=arr;
// const [first,...third]=arr; //Baccha hua ek array hi banega third me chala jayega 
// console.log(first,third);






