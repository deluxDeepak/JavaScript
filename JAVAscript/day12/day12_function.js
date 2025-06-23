function greet() {
    console.log("Helllow world");
}
greet();

// Add two numbers 
// parameters
function add(number1, number2) {
    console.log(number1 + number2);
}
// function call :argument 
add(45, 2);

// Multiply two numbers 
function mul(number1, number2) {
    return number1 * number2;
}
console.log(mul(2, 7));
let result = mul(78, 2);
console.log(result);


// making function (store in variable )
// ye function ke referance ko store karke rakhega (Function will store in heap)
const fun = function () {
    console.log("Hellow");
    // retunr yahan pe kuch nahi hai (undefine hai )
    // return ke baad ka statement nahi chalega 
}
fun();
console.log(fun());



// Arrow function (yahan  function likhne ki jarurat nahi hai )
const fun1 = () => {
    console.log("hellew");
}
fun1();


// yahan return likhne ki jarurat nahi hai 
// const fun2 = (number1, number2) => { 
//     return number1 + number2; 
// }
// fun2();

// automatically return kar dega 
const fun2 = (number1, number2) => number1 + number2;
console.log(fun2(34, 23));


// yahan bracket lagana bhi jaruri nahi hai (jab single parameter ho tab hat jayega )
// const cube = (number) => number * number * number;
const cube = number => number * number * number;
console.log(cube(4));

// sum any parameter (use rest operator array ke form me store karega )
const sum = function (...number) {
    console.log(number);

}
sum(2, 4, 5, 2);
sum(34, 4);


let obj = {
    name: "Rohit",
    age: 22,
    money: 240,
}
// function fun_o(obj1){
//     console.log(obj1.name,obj1.money);
// }

// destructure 
function fun_o({ name, money }) {
    console.log(name, money);
}
fun_o(obj);
