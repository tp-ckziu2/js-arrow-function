const przekatna = require('../zadania/zadanie3');

describe('Funkcja obliczająca przekątną prostokąta', () => {
	test('Oblicza przekątną prostokąta dla boków 3 i 4', () => {
		expect(przekatna(3, 4)).toBeCloseTo(5, 2);
	});

	test('Oblicza przekątną prostokąta dla boków 5 i 12', () => {
		expect(przekatna(5, 12)).toBeCloseTo(13, 2);
	});

	test('Zwraca 0 dla boków 0 i 0', () => {
		expect(przekatna(0, 0)).toBe(0);
	});

	test('Obsługuje wartości ujemne (zakładając wartości absolutne)', () => {
		expect(przekatna(-3, -4)).toBeCloseTo(5, 2);
	});
});
