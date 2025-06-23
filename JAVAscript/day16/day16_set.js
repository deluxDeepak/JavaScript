// Set 
// A set in a Java Script is a collection o funique values.store values withouth duplicates 

// Always unique value persent 
// const set=new Set([10,20,30,40,50,50,10]);
// console.log(set);

// const set = new Set();
// set.add(4);
// set.add(56);
// set.add(5);
// set.add(56);
// set.add("rohit");
// set.delete(56);
// console.log(set);
// console.log(set.size);

// // koi Element persent hai ya nahi 
// console.log(set.has(4));
// set.clear();
// console.log(set);

// union operation in set 
let set1 = new Set([10, 20, 30, 40, 50]);
let set2 = new Set([23, 45, 30, 50]);
// set khud hi duplicate value remove kar dega 
let U_set = new Set([...set1, ...set2]);
console.log(U_set);

// intersection in set
// filter in array use kar lenge 
const result = [...set1].filter((num) => set2.has(num));
console.log(result);

// Array to Set
// const arr = [10, 20, 30, 40];
let arr = [10, 20, 30, 40];
const set = new Set(arr);
console.log(set);

// Set to array 
// yehan problem ho reha tha (assignment to constant varible ) constant variable me assing nahi kar sakte hai
// spread operator 
arr = [...set];
console.log(arr);

// iterate over  the set 
// for of loop 
// for (let value of set1) {
//     console.log(value);
// }

// for each 
set1.forEach((value) => console.log(value));



