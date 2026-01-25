import { useState } from "react";

function App() {
	const [number, setNumber] = useState("");
	const isInvalid = number.length != 10 && isNaN(Number(number));

	const isFancy =
		!number.split("").some((n) => {
			return ["2", "4", "8"].includes(n);
		}) &&
		(number.endsWith("5") || number.endsWith("55"));

	function sumCalculator(num) {
		num = Math.abs(Number(num));

		if (num < 10) return num;

		const sum = num
			.toString()
			.split("")
			.reduce((acc, digit) => acc + Number(digit), 0);

		return sumCalculator(sum);
	}

	return (
		<div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
			<h2 className="font-bold text-2xl mb-10">Fancy Number Calculator</h2>
			<input
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				type="text"
				className="border-2 py-2 px-4 text-center"
			/>
			{number.length != 0 && isInvalid && (
				<p className="text-red-400">Enter a Valid Number</p>
			)}
			{number.length != 0 && !isInvalid && (
				<h4>{`The Sum is ${sumCalculator(number)}`}</h4>
			)}

			{number.length == 10 && !isInvalid && isFancy && (
				<p>{`Fancy Number ✨✨`}</p>
			)}
		</div>
	);
}

export default App;
