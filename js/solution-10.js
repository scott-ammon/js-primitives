var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

ages.sort(function (a, b) {return a - b;});

console.log(ages);

var median;

// for odd number of elements
if (ages.length % 2 != 0) {
	var middleIndex = Math.floor(ages.length / 2) + 1;
	median = ages[middleIndex - 1];
} 
// for even number of elements
else {
	var lower = Math.floor(ages.length / 2) - 1;
	var upper = Math.floor(ages.length / 2);
	median = (ages[lower] + ages[upper]) / 2;
}

console.log('Median is: ', median);