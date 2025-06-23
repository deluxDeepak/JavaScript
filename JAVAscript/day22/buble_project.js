document.body.addEventListener("click", (event) => {
    // create the div 
    const circle = document.createElement('div');

    // set the atribute in the div 
    circle.className = 'circle';
    // circle.setAttribute('circle');
    // circle.classList.add('circle')
    circle.innerHTML = "Hi";

    // **************************************************
    // event me se value nikalna 
    const x = event.clientX;
    const y = event.clientY;

    // ye position bata dega 
    circle.style.left = `${x - 25}px`; //ye string likha hai 
    circle.style.top = `${y - 25}px`; //To center the created circle 


    const color = ["red", "blue", "green", "orange", "pink", "grey", "yellow"];
    circle.style.backgroundColor = color[Math.floor(Math.random() * color.length)];

    document.body.appendChild(circle);

    // jo div lageag bosy me oska hata bhi dena hai 
    setTimeout(() => {
        circle.remove();
    }, 5000);


})