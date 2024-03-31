function searchCity(city) {
  let apiKey = "06b31a3a8eeefba9a7ed684o4f85t2b3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={apiKey}&units=metric`;
  axios.get(apiURL).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
