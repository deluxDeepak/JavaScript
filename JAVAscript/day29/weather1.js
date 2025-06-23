// Button pe click karu oske baad wo data uthaye (pehle button pe event listner lagana hoga )
document.querySelector('button').addEventListener('click', () => {
    const input = document.getElementById('location').value;
    const element = document.getElementById('weatherInfo');

    // It's good practice to check if the input is empty(Input kuch hoga to hi result show karenge )
    if (!input) {
        element.innerText = 'Please enter a location.';
        return;
    }

    function update_time(data) {
        // element.innerText = `Today's temperature:  ${data.current.temp_c}`;
        // showing the prper messaage 

        const location_Name = data.location.name;
        const temp = data.current.temp_c;
        const condition = data.current.condition.text;

        // Inner Html Matlab hota hai khud se kuch naya html tag jor skte hai 
        // khudse Html add kar deta hai code me 
        element.innerHTML = `
        <h2> ${location_Name}</h2>
        <p>${temp}°C</p>
        <p>${condition}</p>
        `;
    }
    // const promise = fetch('http://api.weatherapi.com/v1/current.json?key=563ab708670d4eaa98993641252206&q=${input}&aqi=no');
    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=563ab708670d4eaa98993641252206&q=${input}&aqi=no`)
    promise
        .then(response => response.json())
        .then(data => update_time(data))
        // It's crucial to catch errors, like network failures or invalid URLs.
        .catch(error => {
            console.error('Fetch Error:', error);
            element.innerText = 'Failed to fetch weather data. Please check your connection and try again.';
        });

})