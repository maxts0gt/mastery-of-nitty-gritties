const groupTitles = (titles) => {
	// create hash table
	let result = {};

	// this is where we are grabbing each word of titles
	for (let title of titles) {
		// here we are creating the array of 26
		let count = new Array(26).fill(0);
		// now grabbing the each letter
		for (let letter of title) {
			// getting the unicode of each letter
			let index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
			// increasing the corresponding numbers by 1
			count[index] += 1;
		}
		// create key variable for grabbing the count
		let key = count;
		// checking if the key is in the result
		if (key in result) {
			// if it exists then push to the corresponding array
			result[key].push(title);
		} else {
			// if not create the array for that title group
			result[key] = [title];
		}
	}
	// this is the answer we return
	let answer = [];
	// now check each word in result
	for (let word in result) {
		// if we have the result push it to the answer array
		answer.push(result[word]);
	}
	// then return the array
	return answer;
};

let titles = ['duel', 'deul', 'dule', 'uedl', 'speed', 'spede'];

console.log(groupTitles(titles));
