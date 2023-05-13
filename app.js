const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
// const API = `https://api.openweathermap.org/data/2.5/weather?q-${city}&appid=${API_KEY}&units=metric`

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q-${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
}

form.addEventListener(
    "submit",
    function (event) {
        console.log(search.value)
        event.preventDefault();
    }
)
