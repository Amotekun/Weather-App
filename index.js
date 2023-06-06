const apiKey = "0f3a31386f874387f7c9788bff443b8f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function searchWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src="./images/clouds.png"
        };

        if(data.weather[0].main == "Clear") {
            weatherIcon.src="./images/clear.png"
        };

        if(data.weather[0].main == "Rain") {
            weatherIcon.src="./images/rain.png"
        };

        if(data.weather[0].main == "Drizzle") {
            weatherIcon.src="./images/drizzle.png"
        };

        if(data.weather[0].main == "Humidity") {
            weatherIcon.src="./images/humidity.png"
        };

        if(data.weather[0].main == "Mist") {
            weatherIcon.src="./images/mist.png"
        };

        if(data.weather[0].main == "Snow") {
            weatherIcon.src="./images/snow.png"
        };

        if(data.weather[0].main == "Wind") {
            weatherIcon.src="./images/wind.png"
        };

        document.querySelector(".error").style.display = "none";

    }
    
     
}

searchBtn.addEventListener("click", ()=> {
    searchWeather(searchBox.value)
})

