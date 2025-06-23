const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     // This give pointer event 
//     // console.log(event); 

//     // kaun sa tag select hua hai 
//     // console.log(event.target);

//     // ye id bata dega 
//     // console.log(event.target.id);

//     // ye dikahyega kya type ho reha hai 
//     // "click"  event set hai uper mai ---> karne ke baad print karega 
//     //"" input" -->jaise koi input denge waise hi answer mil jayega 
//     // "change" -->jaise bahar me click karenge waise hi print hoga 
//     // "focus"--->event buble nahi hota hai 
//     // "focusin"--->use karte hai (focus hatega tab print hoga)
//     // blur or focusout-->jab focus hatega 
//     // "submit"-->jab form submit ho jayega to page referse ho jayega 
//     // "reset"-->jab reset karna ho sab kuch clear ho jata hai 
//     // console.log(event.target.value);

//     // page referse nahi hone dena hai 
//     event.preventDefault();

//     const first = document.getElementById('first');
//     console.log(first.value);
//     const second = document.getElementById('second');
//     console.log(second.value);
//     const third = document.getElementById('third');
//     console.log(third.value);

//     const result=document.getElementById('result');
//     result.innerText="Your form is Successfully submited";
// })


// *************************************Optimizing the code ****************************************//
form.addEventListener('submit', (event) => {
    // To prevent default refresh 
    event.preventDefault();

    // Form data:-Ek type ka object hai (API keys type )
    // ye pura form ka data lake dega (Form data )
    const data = new FormData(form);
    console.log(data);
    // keys value pair me data ata hai 
    // data.keys(): Form data iterator ke roop me aa jata hai (isko array me convert kar sakte hai )
    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));

    for (let [keys, value] of data.entries())
        console.log(keys, value);
})