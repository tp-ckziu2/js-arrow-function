const tablica = [3, 4, 5];

const srednia1 = function (t) {
	let suma = 0;
	for (let indeks in t) suma += t[indeks];
	return suma / t.length;
};

const srednia2 = t => {
	let suma = 0;
	for (let element of t) suma += element;
	return suma / t.length;
};

console.log(`srednia1(tablica): ${srednia1(tablica)}`);
console.log(`srednia2(tablica): ${srednia2(tablica)}`);
