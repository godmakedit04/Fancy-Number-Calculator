function sumDigit(num) {
	return num
		.toString()
		.split("")
		.reduce((acc, digit) => acc + Number(digit), 0);
}

function sumCalculator(num) {
	num = Math.abs(Number(num));
	if (num < 10) return num;
	const sum = sumDigit(num);
	return sumCalculator(sum);
}

function isFancyNumber(number) {
	return (
		!number.split("").some((n) => {
			return ["2", "4", "8"].includes(n);
		}) &&
		(number.endsWith("5") || number.endsWith("55"))
	);
}

function isValidNumber(number) {
	return number.length === 10 && !isNaN(Number(number));
}

export { sumCalculator, sumDigit, isFancyNumber, isValidNumber };
