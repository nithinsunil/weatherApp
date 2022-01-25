function weatherApp() {
    let cityName = place.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d322fe8697ead6e46ed0624adcc6dfbd&units=metric`).then(res => {
        if (res.ok) {
            return res.json()
        }
        else {
            throw new Error("Failed to fetch data")
        }
    }).then(data => console.log(displayValues(data))).catch(err => alert(err.message))
}

function displayValues(data) {
    let temp = data.main.temp
    let locationName = data.name
    let minTemp = data.main.temp_min
    let maxTemp = data.main.temp_max
    let typeWeather = data.weather[0].main
    let windSpeed = data.wind.speed

    html_data = `Temp: ${temp}, locationName: ${locationName}, Minimum temp: ${minTemp}, Maximum temp: ${maxTemp}, Weather type: ${typeWeather}, Wind speed: ${windSpeed}`
    document.querySelector("#target").innerHTML = html_data
}