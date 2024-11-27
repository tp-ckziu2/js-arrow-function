const f1 = function (x) {
	return x >= 0 ? x : -x;
};

console.log(`f1(-1): ${f1(-1)}`);

const f2 = x => (x >= 0 ? x : -x);

console.log(`f2(-1): ${f2(-1)}`);
