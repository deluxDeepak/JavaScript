
function timing(){
const timer = document.getElementById("root");
// timer.innerHTML="Hellow world";
const now = new Date();
const indiantme = now.toLocaleTimeString();
timer.innerHTML = indiantme;
}
// timing();
// here we can use set interval (which takes two parameters )
setInterval(timing,1000);


const timer = document.getElementById("root");
timer.style.fontSize = "200px";
timer.style.display = "flex";

// height of div increse kareaga 
timer.style.height = "100vh";
// timer.style.alignContent="center";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
