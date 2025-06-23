const obj = {
    name: "rohit",
    age: 20
};
const obj1 = {
    amount: 2000,
    money: 299
};

// change the prototype (inherit the property of obj )
// jo property obj me hoga wo obj1  se bhi use kar sakte hai 
// modification kar sakte hai new object me (jis se inherit karega )
obj1.__proto__ = obj;
console.log(obj1.name);