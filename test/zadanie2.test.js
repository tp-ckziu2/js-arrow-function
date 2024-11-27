const { minimum, maksimum } = require('../zadania/zadanie2');

test('Znajduje minimum i maksimum w tablicy', () => {
	expect(minimum([3, 4, 5])).toBe(3);
	expect(maksimum([3, 4, 5])).toBe(5);
});
