**Hoisting** is a JavaScript mechanism where declarations of variables and functions are moved to the top of their scope before code execution.

It's important to note that only the declarations are hoisted, not the initializations. This means you can use a variable or function before it's actually declared in the code, but you might get unexpected results if you try to use its value before the declaration is reached during execution.


## Variable Hoisting with `var`

```javascript
console.log(myVar); // Output: undefined
var myVar = "Hello";
console.log(myVar); // Output: Hello
```

In this case, the declaration `var myVar;` is hoisted to the top. So, during the first `console.log`, `myVar` exists but has no assigned value yet (hence `undefined`). The initialization `"Hello"` happens later when the code reaches that line.

## Variable Hoisting with `let` and `const`

```javascript
console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization
let myLet = "World";
console.log(myLet); // Output: World

console.log(myConst); // Output: ReferenceError: Cannot access 'myConst' before initialization
const myConst = "!";
console.log(myConst); // Output: !
```

`let` and `const` are also hoisted, but they behave differently. They are not initialized with `undefined`. Instead, they remain in a "temporal dead zone" (TDZ) until their declaration is encountered. Accessing them before that results in a `ReferenceError`.

## Function Hoisting (Declarations)

```javascript
sayHello(); // Output: Hello from the function!
function sayHello() {
  console.log("Hello from the function!");
}
```

Function declarations (defined using the `function` keyword) are fully hoisted, including their body. This means you can call a function before its declaration in the code.

## Function Hoisting (Expressions)

```javascript
sayGoodbye(); // Output: TypeError: sayGoodbye is not a function
var sayGoodbye = function() {
  console.log("Goodbye!");
};

sayGoodbye(); // Output: Goodbye!
```

Function expressions (assigning a function to a variable) are hoisted like variables. Only the variable declaration is hoisted, not the function definition itself.
