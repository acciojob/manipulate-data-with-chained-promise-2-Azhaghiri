//your JS code here. If required.
let output = document.getElementById("output");

function manipulateArray() {
	new Promise((resolve) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4])
		})
	})
	.then((array) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const eventNumbers = array.filter(num => num%2 == 0);
				output.innerHTML = eventNumbers.join(", ");
				resolve(eventNumbers)
			},1000)
		})
	})
	.then((eventNumbers) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const sum = eventNumbers.map(num => num * 2);
				output.innerHTML = sum.join(", ")
				resolve(sum)
			},3000)
		})
	})
}
manipulateArray();