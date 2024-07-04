const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const key = "3763cea8780b58efd12512345009462e";
const inputbox = document.querySelector("#inputbox");
const search = document.querySelector("#search");
inputbox.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){

        checkWeather(inputbox.value);
    }
})
async function checkWeather(city) {
    // const response = await fetch(url + city + `&appid=${key}`);
    // var data = await response.json();
    fetch(url + city + `&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });
}

search.addEventListener("click", () => {
    checkWeather(inputbox.value);
});
