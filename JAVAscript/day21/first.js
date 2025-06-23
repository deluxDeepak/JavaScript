// Element manupulation (create delete add ect.)

// ***************************************Create an element **********************************************//
function attach(content) {
    const element = document.createElement('li');
    element.innerHTML = content;

    const element1 = document.createElement('li');
    element1.innerHTML = content + "V2.0";


    // Attach the element in Html (last me attach ho jayega )(Acess the parent )
    const parent = document.getElementById("root");
    // parent.appendChild(element);    //Only one argument leta hai 
    // parent.append(element,"Another one");   //Multiple items attach kara sakte hai 
    parent.append(element, element1);
};
attach("TS");
attach("react");


//*********************************** Create a text node ***************************************************//
const element = document.createTextNode("Hellow world");
const parent = document.getElementById('root');
parent.append(element);


//*********************************** Create Atribute node *************************************************//
const atribut = document.createAttribute("id");
atribut.value = "first";      //id ka corossponding value dena parega 

// access to first list 
// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(atribut);

// Acess to second list 
const curr_list1 = document.getElementById('root');
console.log(curr_list1.children);   //Html collection milega children ka
curr_list1.children[1].setAttributeNode(atribut);


//********************************* Access atributes of element  ********************************************//
const atribute = document.getElementById('root');
// jo atribute chiye oska name string me hona chiye 
console.log(atribute.getAttribute("style"));
// you can set custome atribute 
atribute.setAttribute("custom", "value");
// can also change the atribute 
atribute.setAttribute("custom", "new_name");
// can also remove the atributes 
atribute.removeAttribute("custom");


//*********************************** Add nodes to DOM ***************************************************//
const add_node = document.getElementById("root");

const element3 = document.createElement("li");
element3.innerHTML = "New tag joined";

// Adding in different location 
// add_node.prepend(element3);     //Add to first children 
// add_node.append(element3);      //Add to last children

// add in the between the children 
const child2 = add_node.children[1];
// insertBefore(new_node, reference_node);
add_node.insertBefore(element3, child2);

// Replacing the child 
add_node.replaceChild(element3, child2);

// insertadjacentelement 
const parent1 = document.getElementById('root');
const insert_data = document.createElement("div");
insert_data.innerHTML = "Helllow world new tag ";

parent1.insertAdjacentElement("beforebegin",insert_data);
// beforebegin :-Before the element itself
// afterbegin:-Inside the element,before its first child 
// beforeend:-Inside the element,after its last child 
// afterend:-After the element itself


// Deleting a node and element 
document.querySelector('li').remove();


