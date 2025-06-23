// Array 
const arr=[23,45,67,34,"More value can be inserted",true];
console.log(arr[3]);
// ye negative index le leta haia 
console.log(arr.at(-1));
console.log(arr.length);

const newarr=arr;
console.log(newarr==arr);

// this create the new adress of array (point new adresss)
const newarr1=structuredClone(arr);
console.log(newarr1==arr);

// push (Add the element at the end )
arr.push(34);
arr.push(40);
console.log(arr);

// pop the last element from the array 
arr.pop();
console.log(arr);

// unshift (Add element at the start)
arr.unshift(90);
arr.unshift(100);
console.log(arr);

// shift (delete element from the start )
arr.shift();
arr.shift();
console.log(arr);

// delete operation (delete karega but space nahi chorega (hole) )
// delete arr[0];
// console.log(arr);


// some operation 

// jo first index hai wo batayega (do index rehega to )
console.log(arr.indexOf(34));
console.log(arr.lastIndexOf(34));
// koi number include hai ya nahi hai 
console.log(arr.includes(34));


// slice (not change in the original array)
// last index is not included (this will slice off the array can create the new array  )
console.log(arr.slice(2,4));
console.log(arr);

// splice   (can also change the original  array)
// first index:-khan se lena hai array 
// second index:-kitna Element lena hai array ka 
// splice(starting_index,total_element_deleted,add value )

// console.log(arr.splice(2,4));
console.log(arr.splice(2,4,9,"deepak"));
console.log(arr);

// Array to string 
console.log(typeof arr.toString());
// ye bhi string me convert karega 
console.log(arr.join(" "));


// Do array ko jorna 
let arr1=[23,45,56,67];
let arr2=[22,33,44,55];
let arr3=[12,24,25,26];
let arr4=arr1.concat(arr2,arr3);
console.log(arr4);

// 2d array form 
arr1.push(arr2);
console.log(arr1);
console.log("Third index of array:",arr1[3]);
console.log("Fourth index of array:",arr1[4]);
console.log("2d index of array:",arr1[4][3]);

let arr2d=[[1,2,3],[4,5,6],[7,8,9]];

// to convert into 1d arrray 
// flat(value) value(default value 1 hota hai ) leta hai kitna level tak flat karna hai (infinity rakh do(ye 3d ko bhi convert kar dega ) )
let new1d=arr2d.flat(Infinity);
console.log(new1d);

console.log(arr2d[0]);  //1D array access
console.log(arr2d[0][1]);   //2D Array acccess

// kya backend se array hi aa reha hai (ye confirm karne ke liye )
let abc=[1,2,23,4,5];
console.log(Array.isArray(abc));

// can be created in this way 
// let ab=new Array(23,56,"Deepak");
let ab=new Array(10);   //Here it will create only the size of array(one value is given )
console.log(ab.length);