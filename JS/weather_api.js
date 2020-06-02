// key 3b7871d306c65b25900930d0a975b3f7 ......

let input = document.getElementById("input");

input.addEventListener("keyup", (e) => {    
    let searchKey = e.target.value;
    console.log(searchKey);
    searchWeather(searchKey);
    e.preventDefault();
})

function searchWeather(searchKey) {
    let Weather_Api = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=3b7871d306c65b25900930d0a975b3f7`;
    window.fetch(Weather_Api).then(data => {
        data.json().then(weather => {
            console.log(weather);
            let weatherData = weather.weather;
            let output = [];
            for (let w of weatherData) {
                output += `
                <div class="col-md-12 mt-4 card">
                    <h1>${weather.name}</h1>
                    <div>
                        <p class="icon">
                        <img src="http://openweathermap.org/img/wn/${w.icon}.png"/>
                        <p><span>temp:</span>
                        <span class="temp">${weather.main.temp - 273.15}&deg;C</span></p>
                        <p class="float-left">${w.description}</p>
                        <p class="des float-right">${w.main}</p></div>
                    </div>
                </div>                
                `;
                document.getElementById("weatherDetails").innerHTML = output;
            }

        })
    }).catch(err => console.log(err));
}