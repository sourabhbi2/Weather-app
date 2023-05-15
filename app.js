const API_KEY = `09895e68b6b4d15d847b08075bac60ea`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
// const temperature = document.querySelector("#temperature")
// const image= document.querySelector("#image")
// const description = document.querySelector("#description")

// const API = `https://api.openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);

}
const showWeather = (data) => {
    if(data.cod=="404") {
        weather.innerHTML=`<h2> city not found</h2>`
    }
    console.log(data)
    // weather.innerHTML=`<h2>Loading...</h2>`
    // temperature.innerHTML = `${data.main.temp} °C`;
    // image.innerHTML =`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`;
    // description.innerHTML =`${data.weather[0].main}`
     weather.innerHTML= `<div> 
     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
     </div>
     <div>
         <h2 style="padding-bottom: 10px; padding-top: 10px;">${data.main.temp} °C</h2>
         <h4>${data.weather[0].main}</h4>
    </div> `
    
}
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '1caa3eb02amsh2cdb34e885b2e03p1e9b74jsn8f8662f46507',
//         'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
//     }}

form.addEventListener("submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
