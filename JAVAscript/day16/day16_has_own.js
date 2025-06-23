let obj = {
    name: "rohit",
    age: 34,
    orange: 1,
}
// jo key persent rehega wo ture or false me return karega 
// varible ke value ko put karega (in terms of string )

let curr = "orange";
// obj.orange=2;
// obj["orange"]=2;
// obj[curr]=2

console.log(obj.hasOwnProperty(curr));
if (obj.hasOwnProperty(curr))
    obj[curr]++;
console.log(obj);
