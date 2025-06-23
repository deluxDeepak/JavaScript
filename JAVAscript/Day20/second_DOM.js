// # se id select hoga and dot.se class select hoga 
// Acccesing by css selector 

// const id = document.querySelector('#first');
// id.innerHTML = "Hellow mafia";


// sabhi select karne ke liye 
// document.querySelectorAll('.header1');
// ye nodelist layega (jo array ke jaisa kam karega)

// nodelist to convert in array 
// Array.from(obj)

// how to iterate over node list 
// 1.for of loop laga sakte hai 
// 2.for each loop laga sate hai 
// 3.simple for loop 


// yahan multiple collection nahi ayega 
// jo first match hoga wo aa jayega
const class1 = document.querySelector('.header2');
console.log(class1);
class1.style.backgroundColor = "red";




// Accessing by tag name 
// ye bhi ek html collection hi ayega 
const tag = document.getElementsByTagName('h1');
console.log(tag);

const team = document.getElementsByTagName('li');

// how to iterate over it 
// 1.
for (let i = 0; i < team.length; i++) {
    team[i].style.color = "blue";
}

// 2.for of 
// for (let val of team)
//     console.log(val);

// 3.convert it into array 
// Array.from(team).forEach((val)=>{
//     console.log(val);
// })


// Acessing Element by relationship 
// const list=document.querySelector('li');
// console.log(list.parentElement);
// console.log(list.parentNode);


const par = document.querySelector('ul');
console.log(par);

// Nodelist me wo element aa jate hai jisme text rehta hai (matlab line khtam hone ke baad jo sapce bach jata hai )
console.log(par.childNodes);

// HTMLCollection lake dega (only html tags dega )
console.log(par.children);

// first text(space) deta hai   
console.log(par.firstChild);
// ye Element child dega 
console.log(par.firstElementChild);




// 1.inner HTML:pura tag ke ander jo rehega sab print kara dega 
// 2.innertext:jo screen par nahi rehgea wo bhi aa jayega 
// 3.textContent:only jo screen pe rehga wahi visible hoga 

const store1 = document.getElementById('first');
console.log(store1.innerHTML);      //As it is show karega tag ke ander ka 

console.log(store1.textContent);    //dispaly none :bhi show karega 

console.log(store1.innerText);      //Display none nahi show karega (only screen show)






