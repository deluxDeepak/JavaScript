// for of loop Array pe lagate hai (iterable pe lagana hai)
// const arr=[12,34,5,67,77];
// // Direct value print kar dega 
// for(let value of arr)
// {
//     console.log(value);
// }


// // String par bhi lag sakta hai 
// let str="Rohit is good boy";
// for(let st of str)
// {
//     console.log(st);
// }

// ye object par nahi laga sakte hai (kyunki object iterable nahi hai)
// object ko iterate karana hai for of loop se 
// const obj = {
//     name: "deepak",
//     age: 22,
//     money: 4000,
// }

// // Object.values(obj) ye array return karke dega 
// for (let val of Object.keys(obj)) {
//     console.log(val, obj[val]);
// }


// for each operation (iterate over the array )
// teen argument le sakta hai 
// 1.value (single argument means number)
// 2.index
// 3.array(to change the array modify the array)


// let arr = [23, 44, 56, 33, 66];
// arr.forEach(useCallback); isme argument ek call back function rehna chiye 
// arr.forEach(function(num){
//     console.log(num);
// })

// arrow function 
// arr.forEach((num) => console.log(num));
// arr.forEach((num, index, arr) => {
//     console.log(num);
//     arr[index] = num * 2;
// });

// console.log(arr);



// greet ke jagah ek call back function ana chiye 
// const greet = function (num) {
//     console.log(num);
// }
// arr.forEach(greet);



// Filter 

// yahan modification nahi kar sakte hai 
// let arr = [23, 44, 56, 33, 66];
// // ye true or false me store karega (num ke jagah pe array ka element ayega )
// // yehan bhi teen argument de sakte hai 
// // const result=arr.filter((num,index,array)=>{
// //     return num%2==0;
// // })
// const result=arr.filter(num=> num%2==0);

// console.log(result);

// const student = [
//     { name: "Deepak", age: 22, marks: 90 },
//     { name: "Rohit", age: 34, marks: 30 },
//     { name: "Ram", age: 55, marks: 55 },
//     { name: "somi", age: 42, marks: 87 },
//     { name: "sohit", age: 12, marks: 80 },
// ]
// // const result = student.filter((obj) => obj.marks > 50);

// // destructure bhi kar sakte hai 
// const result = student.filter(({ marks }) => marks > 50);

// console.log(result);



// Map 

// (ye bhi call back function lega )
// yahan pe modify bhi kar sakte hai 
// foreach me return nahi hota hai 
const arr = [1, 2, 3, 4];
// const result = arr.map((num) => {
//     return num * num;
// })
// console.log(result);


// chaning in map and filter 
const result = arr.filter((num) => num % 2 == 0).map((num) => num*num);
console.log(result);


