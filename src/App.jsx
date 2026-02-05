import { useState } from "react";
import {
	sumCalculator,
	sumDigit,
	isFancyNumber,
	isValidNumber,
} from "./utils/utils";
function App() {
	const [number, setNumber] = useState("");
	const isValid = isValidNumber(number);
	const isFancy = isFancyNumber(number);

	return (
		<div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
			<h2 className="font-bold text-2xl mb-10">Fancy Number Calculator</h2>
			<input
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				type="text"
				className="border-2 py-2 px-4 text-center"
			/>
			{number.length != 0 && !isValid && (
				<p className="text-red-400">Enter a Valid Number</p>
			)}
			{number.length == 10 && isValid && (
				<h4>{`The Sum is ${sumDigit(number)} and digit Sum ${sumCalculator(number)}`}</h4>
			)}

			{number.length == 10 && isValid && isFancy && (
				<p>{`Fancy Number ✨✨`}</p>
			)}
		</div>
	);
}

export default App;
