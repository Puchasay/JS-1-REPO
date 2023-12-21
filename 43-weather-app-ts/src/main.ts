/**
 * 🌧️.
 *
 */

import { getCurrentWeather } from "./services/owmapi";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";
import { WeatherReport } from "./types/owmapi.types";

console.log("API Key from env is", import.meta.env.VITE_OWM_APIKEY);

const alertEl = document.querySelector<HTMLElement>("#alert")!;
const forecastEl = document.querySelector<HTMLElement>("#forecast")!;
const spinnerEl = document.querySelector<HTMLElement>("#spinner")!;

const renderNotice = (msg:string, severity = "info") => {
	alertEl.innerText = msg;
	alertEl.className = `alert alert-${severity}`;
}

const renderErrorNotice = (msg: string)=> renderNotice(msg, "danger");
const renderInfoNotice = (msg: string) => renderNotice(msg, "info");
// const renderWarningNotice = (msg: string) => renderNotice(msg, "warning");  //ga dibutuhin skrg

// Render current weather conditions
const renderCurrentWeather = (conditions: WeatherReport) => {
	const icons = conditions.weather.map(condition =>
		`<li><img src="http://openweathermap.org/img/wn/${condition.icon}@2x.png" alt="${condition.main}" title="${condition.description}"></li>`);

	// determine if it's daytime or nighttime
	const banner = (conditions.dt > conditions.sys.sunrise && conditions.dt < conditions.sys.sunset)
		? "assets/images/day.svg"
		: "assets/images/night.svg";

	/*
	// same as above, but not as pretty 😅
	let banner = "assets/images/night.svg";  // assume it's nighttime as default
	if (conditions.dt > conditions.sys.sunrise && conditions.dt < conditions.sys.sunset) {
		// oops, it was daytime
		banner = "assets/images/day.svg";
	}
	*/

	// Get weather condition freshness
	const freshness = new Date(conditions.dt * 1000);

	forecastEl.innerHTML = `
		<img src="${banner}" class="card-img-top">
		<div class="card-body">
			<h5 class="card-title" id="location">
				<span id="city">${conditions.name}</span>,
				<span id="country">${conditions.sys.country ?? "N/A"}</span>
			</h5>
			<p class="temp">
				<span id="temperature">${conditions.main.temp}</span>
				&deg;C
			</p>
			<p class="humidity">
				<span id="humidity">${conditions.main.humidity}</span>
				&percnt; humidity
			</p>
			<p class="wind">
				<span id="windspeed">${conditions.wind.speed}</span>
				m/s
			</p>
			<ul class="conditions">
				${icons.join("")}
			</ul>

			<p class="text-muted small">${freshness.toLocaleString("sv-SE")}</p>
		</div>
	`;
}

// Listen for when the user wants to get weather conditions for a city
document.querySelector("#search-form")!.addEventListener("submit", async (e) => {
	e.preventDefault();

	// Hide any previous current weather conditions and errors
	forecastEl.classList.add("hide");
	alertEl.className = "hide";

    const target = e.target as HTMLFormElement;

	// Get value from input-field
	const city: string = target.query.value.trim();

	// Make sure input is at least somewhat valid
	if (city.length < 3) {
		renderInfoNotice("Please enter at least 3 chars");
		return;
	}

	try {
		// Show loading spinner
		spinnerEl.classList.remove("hide");

		// Get weather for city
		const data = await getCurrentWeather(city);

		// render (and then show) current weather conditions
		renderCurrentWeather(data);
		forecastEl.classList.remove("hide");

	} catch (err) {   //Klo ketemu unknown comment from typescript then tulis begini aja if statement
		// Something went wrong!
        if (typeof err === "string") {
			renderErrorNotice(err);
		} else {
			renderErrorNotice("Something very bad happened");
		}
		// renderErrorNotice(err as string);  // ato bisa tulis gini juga kl ada unknown

	}

	// hide loading spinner
	spinnerEl.classList.add("hide");
});

//pake ini ?? artinya klo di kiri null ato undefined klo pake || 
//document.querySelector<HTMLInputElement>("#query")!.value = localStorage.getItem("weather_city") ?? "";




// const saveToLocalStorage = <DataType>(key: string, data: DataType) => {
// 	// save todos to localStorage
// 	const json = JSON.stringify(data);
// 	localStorage.setItem(key, json);
// }
//call it so here: saveToLocalStorage("todos", todos);

// saveToLocalStorage<Todo[]>("todos", todos);
// saveToLocalStorage<string>("city", "Malmööööööeee");

// get JSON-todos from localStorage
// const json = localStorage.getItem("todos") || "[]";  // we need to account for that todos may not yet exist in localStorage
// //      ^?

// let todos: Todo[] = JSON.parse(json);

//row 136 bisa tulis gini jg:
// let todos = loadFromLocalStorage<Todo[]>("todos") ?? [];
//   ^?

//Row 122, 123 sama jg dg dibawah ini:
// document.querySelector<HTMLInputElement>("#query")!.value
// 	= loadFromLocalStorage<string>("weather_city") ?? "";