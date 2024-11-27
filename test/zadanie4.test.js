const { poleKola, obwodKola } = require('../zadania/zadanie4');

test('Oblicza pole i obwód koła', () => {
	expect(poleKola(3)).toBeCloseTo(28.27, 2);
	expect(obwodKola(3)).toBeCloseTo(18.85, 2);
});
