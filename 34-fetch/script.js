/**
 * Fetch 🐶
 *
 * Gets `cats.json` and `dogs.json` in parallel
 */

// console.log("starting...");

// fetch("data/cats.json")
// 	.then(res => {
// 		console.log("response:", res);

// 		// Was request successful?
// 		if (!res.ok) {
// 			// Throw an error
// 			throw new Error("Request was not successful!");
// 		}

// 		return res.json();
// 	})
// 	.then(data => {
// 		console.log("data:", data);
// 	})
// 	.catch(err => {
// 		console.log("Nope, something went wrong:", err);
// 		// alert("Sorry, something went terribly wrong. Please try again never.");
// 	});

// fetch("data/dogs.json")
// 	.then(res => {
// 		console.log("response:", res);

// 		// Was request successful?
// 		if (!res.ok) {
// 			// Throw an error
// 			throw new Error("Request was not successful!");
// 		}

// 		return res.json();
// 	})
// 	.then(data => {
// 		console.log("data:", data);
// 	})
// 	.catch(err => {
// 		console.log("Nope, something went wrong:", err);
// 		// alert("Sorry, something went terribly wrong. Please try again never.");
// 	});

// console.log("done?!");


//Cats först then dog
fetch("data/cats.json")
	.then(res => {
		console.log("response:", res);

		if (!res.ok) {
			// Throw an error
			throw new Error("Request was not successful!");
		}

		return res.json();
	
	})
	.then(cats => {
		console.log("cats:", cats);

		return fetch("data/dogs.json");

	})
	.then(res => {
		console.log("response:", res);

		return res.json();
	})
	.then(dogs => {
		console.log("dogs:", dogs);
	})
	.catch(err => {
		console.log("Nope, something went wrong:", err);
		// alert("Sorry, something went terribly wrong. Please try again never.");
	});


	
