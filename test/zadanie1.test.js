const liczbaPrzeciwna = require('../zadania/zadanie1');

test('Oblicza liczbę przeciwną', () => {
	expect(liczbaPrzeciwna(5)).toBe(-5);
	expect(liczbaPrzeciwna(-7)).toBe(7);
	expect(liczbaPrzeciwna(0)).toBe(0);
});
