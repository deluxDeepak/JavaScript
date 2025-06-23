// Call back function 
function name(fun_call){
    console.log("hellow name");
    fun_call();
}
function greet(){
    console.log("Call back funcition");
}

// ek function ke ander ek dusra function bhej rehe hai osko hi call back function bolte hai 
// call nahi karnA hai only refernce bhejna  hai 
// greet() function ko call nahi karna hai oska refernce bhejna hai 
// name(greet);


// aise bhi function ka refernce  bhej sakte hai /
// name(function greet(){
//     console.log("Call back funcition");
// });


// arrow function bhi bhej sakte hai 
// name(()=>{
//     console.log("Call back function");
// });



// usecase of call back function
function fetch_data(){
    console.log("Fectching the data ");
}
setInterval(fetch_data,400);