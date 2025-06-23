// callback ke jagaha ye fucntion aa jayega 
// callback =() => {
//     preparing_order();
// }
// callback() ===preparing_order(); ye fucntion excute kar do 


// Har ek task pe ek team hota hai *******************************************************
// har ek task dusre pe depend karne laga //
function place_order(callback) {
    console.log("Talking with Domino`s...");

    setTimeout(() => {
        console.log("Order Placed Succesfully");

        // Order hone ke baad ye preparing_order() wala function call hona chiye 
        callback();
    }, 2000);
}
// place_order();

function preparing_order(callback) {
    console.log("Pizza preparation Started....");

    setTimeout(() => {
        console.log("Pizza preparation Done.");

        // pickup_order() ko call karne ke liye 
        callback();
    }, 3000);
}
// preparing_order();

function pickup_order(callback) {
    console.log("Reaching resturant for Picking Order..");

    setTimeout(() => {
        console.log("Order picked up by Delivery Boy.");
        callback();
    }, 2000);
}
// pickup_order();

function deliver_order() {
    console.log("Delivery boy on the way..");

    setTimeout(() => {
        console.log("Order Delivered Succesfully.");
    }, 2000);
}
// deliver_order();


// **************************************************************************************
// Wrong placement in the timing (pehle order place hona chiye )
// place_order();
// preparing_order();
// Talking with Domino`s...
// Pizza preparation Started....
// Order Placed Succesfully
// Pizza preparation Done.
// Use call back function to overcome the problem 
// ***************************************************************************************


// Dusra function call karna hai to as a callback function pass karna hoga isme

// Arrow function to solve the problem 
// place_order(() => {
//     preparing_order();

// });

// This is called callback hell:-callbak ke ander ek aur call ho reha hai *****************
place_order(() => {
    preparing_order(() => {
        pickup_order(() => {
            deliver_order();
        });
    });
});
// *****************************************************************************************

