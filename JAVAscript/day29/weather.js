const promise = fetch('http://api.weatherapi.com/v1/current.json?key=563ab708670d4eaa98993641252206&q=London&aqi=no');

// ye data show nahi karega bas promise show karega
// console.log(promise);

// ye 2second ke baad data show kareaga (lekin time to pata nahi hai kab tak data ayega )
// setInterval(()=>{
//     console.log(promise);
// },2000);

// ye data show karega jab data aa jayega (promise ke ander value aa jayega tab hi chalega proomise then)
// promise.then((data) => {
//     // console.log(data);  //It will give header part data 

//     console.log(data.json());   //Ye bhi promise hi lake dega 
// }).catch((error) => {
//     // agr data nahi aya to error show karna hoga n 
//     console.log(error);

// });


// These three Promises 
// 1.pending 
// 2.resolve
// 3.reject 


// **********************************************************************************************************
// promise.then((data) => {
//     const body_json = data.json();

//     body_json.then((response) => {
//         console.log(response);
//     })
// });

// 2nd method ************************************************************************************************
// const pro=promise.then((data) => {
//     return data.json();
// });

// pro.then((response)=>{
//     console.log(response);

// });

// 3rd method (promise chaining )************************************************************************************************
// promise.then((data) => {
//     return data.json();
// }).then((response) => {
//     console.log(response);
// })

// 4th method ************************************************************************************************
// promise
//     .then(data => data.json())
//     .then(response => console.log(response))


// 5th method ************************************************************************************************
fetch('http://api.weatherapi.com/v1/current.json?key=563ab708670d4eaa98993641252206&q=London&aqi=no')
    .then(data => data.json())
    .then(response => console.log(response.current.temp_c))
    .catch(error => console.log(error));







