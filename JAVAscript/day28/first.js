// Js is a Single Threaded Synchronous Language (ek ke baad ek)
// Js beahviour :- Asyncronous bhi hota hai 

// Single Threaded :One task is completed at a time .


// ************************************Synchronous task ***********************************
console.log("10"
);

const timer = Date.now();

while (Date.now() - timer < 2000) {
    // wait for 2 second 
}
console.log("20");

console.log("30");
// ********************************************************************************************

//*************************************** */ Asynchronous task ********************************
console.log('10');

// setTimeout() java srcipt ka part nahi hai (ye API ka part hai)
setTimeout(() => {
    console.log('20');
}, 2000);

console.log("30");
// ********************************************************************************************



