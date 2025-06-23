// const red=document.getElementById('red');
// const orange=document.getElementById('orange');
// const pink=document.getElementById('pink');
// const blue=document.getElementById('blue');
// const yellow=document.getElementById('yellow');

// // body ek object hai 
// const body=document.body;
// // document.querySelector("body");

// red.addEventListener('click' ,()=>{
//     body.style.backgroundColor="red";
// })
// orange.addEventListener('click' ,()=>{
//     body.style.backgroundColor="orange";
// })
// pink.addEventListener('click' ,()=>{
//     body.style.backgroundColor="pink";
// })
// yellow.addEventListener('click' ,()=>{
//     body.style.backgroundColor="yellow";
// })
// blue.addEventListener('click' ,()=>{
//     body.style.backgroundColor="blue";
// })


// *********************************Optimising  the code **************************************************//

// Event listner ko bhut bar istemal karne se memory full ho jayega 

// sare button ka access le lenge ek hi bar me 
// ye nodelist me anser dega 
// const button = document.querySelectorAll('button');
// const body = document.body;
// // console.log(button);

// button.forEach((button) => {
//     // ek ek karke sare button mil jayenge 
//     // console.log(button)
//     button.addEventListener("click", () => {
//         body.style.backgroundColor = button.id;
//     })

// })


// ****************************Only one event listner ****************************************//
// this is called Event Diligation (automatic parent ke jayega )
const root = document.getElementById('root');

root.addEventListener('click', (event) => {
    console.log(event.target);

    document.body.style.backgroundColor = event.target.id;

})
