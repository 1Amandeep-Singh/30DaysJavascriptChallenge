document.addEventListener('DOMContentLoaded', () => {
    //const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiKey = '5c2ea19b8e56a1396255a7a3a5a0fb02'; // Replace with your actual API key

    document.getElementById('search-btn').addEventListener('click', () => {
        const city = document.getElementById('city').value;
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Log the data to see its structure

                    let forecastHTML = '<h2>5-Day Forecast</h2>';
                    data.list.forEach(item => {
                        const date = new Date(item.dt * 1000).toLocaleDateString();
                        const temperature = item.main.temp;
                        const weather = item.weather[0].description;
                        const icon = item.weather[0].icon;

                        forecastHTML += `
                            <div>
                                <p>${date}</p>
                                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${weather}">
                                <p>Temperature: ${temperature}°C</p>
                                <p>Condition: ${weather}</p>
                            </div>
                        `;
                    });

                    document.getElementById('weather-info').innerHTML = forecastHTML;
                })
                .catch(error => console.error('Error fetching weather forecast:', error));
        } else {
            alert('Please enter a city name.');
        }
    });
});


