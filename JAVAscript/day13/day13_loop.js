// While loop 
// let i = 1;
// while (i < 6) {
//     console.log(i);
//     i++;
// }

// let arr = [1, 23, 34, 56, 67];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


const obj={
    name:"Rohit",
    age:20,
    amount:420,
    city:"madhubani"
}
const key=Object.keys(obj);
// [ 'name', 'age', 'amount', 'city' ]
console.log(key);
console.log(obj["name"]);


for(let i=0;i<key.length;i++)
{
    console.log(obj[key[i]]);
}

