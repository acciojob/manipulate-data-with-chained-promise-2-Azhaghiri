let output = document.getElementById("output");

function manipulateArray() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4]);
		}, 3000);
	})
	.then((array) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const evenNumbers = array.filter(num => num % 2 === 0);
				output.innerHTML = evenNumbers.join(", ");
				resolve(evenNumbers);
			}, 1000);
		});
	})
	.then((evenNumbers) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const doubled = evenNumbers.map(num => num * 2);
				output.innerHTML = doubled.join(", ");
				resolve(doubled);
			}, 2000);
		});
	});
}

manipulateArray();
