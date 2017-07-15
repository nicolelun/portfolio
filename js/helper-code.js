// Helper function for generating random whole numbers between a minimum and a
// maximum value.
function randInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function for generating random numbers (including numbers with 
// decimals) between a minimum and a maximum value.
function randNum(min, max) {
	return Math.random() * (max - min) + min;
}

// Schedule the page to reload. This tells the browser to refresh the page 
// 1000ms (or 1s) in the future.
// setTimeout(location.reload.bind(location), 3000);