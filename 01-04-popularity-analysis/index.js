// create function to return increasing or decreasing
// depending on the score
const identifyTitles = (scores) => {
	// create variables and set them to be true
	let increasing = true;
	let decreasing = true;

	// create simple loop
	for (let i = 0; i < scores.length - 1; i++) {
		// check if the current score is higher than next score, then array is not increasing
		if (scores[i] > scores[i + 1]) increasing = false;
		// check if the current score is lower than next score, then array is decreasing
		if (scores[i] < scores[i + 1]) decreasing = false;
	}

	// return whoever is true
	return increasing || decreasing;
};

// create dummy data
let movieRatings = [
	[1, 2, 2, 3],
	[4, 5, 6, 3, 4],
	[8, 8, 7, 6, 5, 4, 4, 1],
];

// go through the data
movieRatings.forEach((movieRating) => {
	// check every array
	if (identifyTitles(movieRating))
		// if true log 'title seperated'
		console.log('Title identified and seperated');
	// else log 'title fluctuating'
	else console.log('Title fluctuating');
});
