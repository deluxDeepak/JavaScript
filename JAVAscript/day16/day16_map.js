// Map
// In java script map is a collection of key-value pairs when both key and value can be any data type 
// key should be unique 
// Allows keys of any type (Maintain the order of the element )
// object ke ander keys always striing hi considered hota hai 

const map1 = new Map();
map1.set(2, 56);
map1.set("rohit", 54);
map1.set(20, "Ramu");
// map1.set("rohit",89) yahan only value update hoga 

// jo kwy value pair delte karna hia wo de denge 
map1.delete(2);

// ye true or false dega 
console.log(map1.has("rohit"));
console.log(map1.size);
console.log(map1);

// 2d way to create map 
// 2d array type ka dikhega 
const map = new Map([["ramu", "Deepak"], [23, "rahul"], [34, 56]]);
console.log(map);

// iterate over the map 
// for of loop 
for (let value of map)
    console.log(value);

// array destructure kar sakte hai 
for (let [key, value] of map)
    console.log(key, value);



