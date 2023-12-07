/**
 * XMLHttpRequest
 *
 */

//Get data from the URL
const getJSON = (myUrl, callback) => {

	// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Set request to GET data from any URL
	request.open("GET", myUrl);

	// Attach an event-listener to the request
	request.addEventListener("readystatechange", () => {
		// Is request done?
		if (request.readyState === 4) {
			// Yay request is done!

			// Was the request successful?
			if (request.status === 200) {
				// 200 OK
				// console.log("Response was:", request.responseText);

				// take the STRING in responseText and PARSE it into JavaScript object
				const data = JSON.parse(request.responseText)

				console.log("Got a response!", data);
				callback(false, data);

			} else {
				// Something went wrong 😢
				console.log("DANGER DANGER WILL ROBINSON!!!!!!!!!");
				callback("Error getting data! Status code is: " + request.status);
			}
		}
	});

	// Send the request
	request.send();

	// Done (?)
	console.log("Request sent!");
}

// Get users plz
getJSON("https://jsonplaceholder.typicode.com/photos", (err, data) => {
	console.log("Hello from the callback! Going to output to DOM");
	// console.log("err:", err);
	// console.log("data:", data);

	if (err) {
		// Something went wrong 😢
		alert(err);
		return;
	}

	// Output all usres
	document.querySelector("#users").innerHTML = data
		.map(photo => `<li>${photo.title}</li>`)
		.join("");
} );

console.log("All requests sent!");
