// Button wale event ko listen karna parega 
const button = document.querySelector('button');

button.addEventListener('click', () => {
    // Read the  data 
    // Input field ke uper access lena hoga pehle 
    // ->jo bhi data input ata hai wo string ke form me ata hai 
    const first_num = document.getElementById('first');
    const num1 = Number(first_num.value);

    const second_num = document.getElementById('second');
    const num2 = Number(second_num.value);


    // Agr number nahi aa reha hai to operation nahi karna hia 
    // if(isNaN(num1)||isNaN(num2))
    //     return;


    // Output the result 
    const result = num1 + num2;

    // jahan show karana hai oska access lena hai 
    const re = document.getElementById('result');
    re.innerText ="Result : "+ result;
})