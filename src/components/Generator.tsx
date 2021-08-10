import { useState } from "react";
import RandExp from "randexp";
import Button from "./elements/Button";
import Options from "./Options";
import Screen from "./Screen";

const Generator: React.FC = () => {
	const [password, setPassword] = useState("");
	const [length, setLength] = useState(8);
	const [useLowercase, setUseLowercase] = useState(true);
	const [useUppercase, setUseUppercase] = useState(true);
	const [useNumbers, setUseNumbers] = useState(true);
	const [useSymbols, setUseSymbols] = useState(false);

	const generatePassword = () => {
		const options: string = `${useLowercase ? "a-z" : ""}${
			useUppercase ? "A-Z" : ""
		}${useNumbers ? "0-9" : ""}${useSymbols ? "!@#$%^&*" : ""}`;

		setPassword(new RandExp(`^[${options}]{${length}}$`).gen());
	};

	return (
		<main className="my-10 max-w-screen-sm rounded-3xl bg-white shadow-2xl p-10 flex flex-col gap-5">
			<Screen password={password} />

			<Options
				length={length}
				setLength={setLength}
				useLowercase={useLowercase}
				setUseLowercase={setUseLowercase}
				useUppercase={useUppercase}
				setUseUppercase={setUseUppercase}
				useNumbers={useNumbers}
				setUseNumbers={setUseNumbers}
				useSymbols={useSymbols}
				setUseSymbols={setUseSymbols}
			/>

			<Button
				title="Generate password"
				onClick={() => generatePassword()}
			>
				Generate password
			</Button>
		</main>
	);
};

export default Generator;
