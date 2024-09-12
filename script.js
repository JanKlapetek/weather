// script.js
document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetch(`http://127.0.0.1:5000/weather?city=${city}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    document.getElementById('location').textContent = data.name;
                    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
                    document.getElementById('description').textContent = data.weather[0].description;
                }
            })
            .catch(error => console.error('Error fetching weather data:', error));
    } else {
        alert('Please enter a city');
    }
});
