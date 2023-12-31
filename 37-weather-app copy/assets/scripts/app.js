/**
 * 🌧️.
 *
 */

const renderCurrentWeather = (data) => {
	document.querySelector("#forecast").innerHTML = `
		<img src="assets/images/forecast-banner.png" class="card-img-top">
		<div class="card-body">
			<h5 class="card-title" id="location">
				<span id="city">${data.name}</span>,
				<span id="country">${data.sys.country}</span>
			</h5>
			<p class="temp">
				<span id="temperature">${data.main.temp}</span>
				&deg;C
			</p>
			<p class="humidity">
				<span id="humidity">${data.main.humidity}</span>
				&percnt; humidity
			</p>
			<p class="wind">
				<span id="windspeed">${data.wind.speed}</span>
				m/s
			</p>
		</div>
	`;
}

// Listen for when the user wants to get weather conditions for a city
document.querySelector("#search-form").addEventListener("submit", async (e) => {
	e.preventDefault();

	// Get value from input-field
	// document.querySelector("#query").value;
	const city = e.target.query.value;

	// Get weather for city
	console.log(`Searching for city "${city}"`);
	const data = await getCurrentWeather(city);
	console.log(`Current weather conditions in "${city}":`, data);

	// render current weather conditions
	renderCurrentWeather(data);
});
