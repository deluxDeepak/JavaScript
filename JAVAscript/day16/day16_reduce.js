// Reduce 
// ek overall result lake deta hai 
const arr = [23, 45, 12, 34, 44];

// Argument taken by reduce (takes callback function )
// reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number,initialValue: number))
// const reuslt=arr.reduce( callback function,initilization )

// jo bhi return karenge wo accumulator me jayega (initial value acumulator me dena hoga )
// const reuslt=arr.reduce( (accumelator,curr_val)=>{
//     console.log(accumelator,curr_val);
//     accumelator=accumelator+curr_val;
//     return accumelator;

// },0)
// console.log(reuslt);

// Single line function 
// const reuslt = arr.reduce((accumelator, curr_val,index,arr) => accumelator + curr_val, 0)
// console.log(reuslt);

let arr1 = ["orange", "banana", "apple", "orange", "banana", "apple", "grapes", "apple"];

// final object ek object chiye (count the number how many times apears )
// first check karna parega ki wo element object ke ander hai ya nahi 
// const result = arr1.reduce((acc, curr) => {
//     if (acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//         acc[curr] = 1;
//     return acc;

// }, {})

// console.log(result);


const result = arr1.reduce((acc, curr) => {
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] = 1;
    return acc;

}, { orange: 23 })

console.log(result);


