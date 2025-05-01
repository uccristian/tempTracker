const claveApi = "e242c5f878eb42339e3233004250105";
const lenguaje = "es";
const inputCity = document.querySelector("#input-city");

const btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener("click", getWeather);

async function getWeather() {
  const city = inputCity.value || 'huancayo';

  if (!city) {
    alert("Por favor, ingresa una ciudad");
    return;
  }

  const apiWeather = `https://api.weatherapi.com/v1/current.json?key=${claveApi}&q=${city}&lang=${lenguaje}`;

  const response = await fetch(apiWeather);
  const data = await response.json();
  showWeather(data);
}

function showWeather(data) {
    document.querySelector('.weather-icon').src = data.current.condition.icon;
    document.querySelector('.weather-text').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c + "°C";
    document.querySelector('.city').innerHTML = data.location.name;
    document.querySelector('.humidity').innerHTML = data.current.humidity + "%";
    document.querySelector('.wind').innerHTML = data.current.wind_kph + " km/h";
}

await getWeather()