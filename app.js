const API_KEY = `09895e68b6b4d15d847b08075bac60ea`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
// const API = `https://api.openweathermap.org/data/2.5/weather?q-${city}&appid=${API_KEY}&units=metric`

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 

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
