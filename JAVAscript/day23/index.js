const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

//************************ * Event Bubling and Event capture**********
// event listner (by deafult chalta hai ) 
child.addEventListener('click', () => {
    console.log("Child Clicked");
}, false)
// addEventListener(first_event,callback_fucntion,capture )
// by default value false hota hai 
grandparent.addEventListener('click', (event) => {
    console.log("GrandParent Clicked");

    // kidhar click ho reha hai ye bata dega 
    console.log(event.target);

    // khudka name lega hamesha 
    console.log(event.currentTarget);
}, false)

parent.addEventListener('click', () => {
    console.log("Prent Clicked");
}, false)

// capture jab true kar denge tab chalega 