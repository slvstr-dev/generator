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
	const [buttonText, setButtonText] = useState("Generate password");

	const generatePassword = () => {
		const options: string = `${useLowercase ? "a-z" : ""}${
			useUppercase ? "A-Z" : ""
		}${useNumbers ? "0-9" : ""}${useSymbols ? "!@#$%^&*" : ""}`;

		setPassword(new RandExp(`^[${options}]{${length}}$`).gen());
	};

	return (
		<main className="w-80 my-5 sm:my-10 p-5 rounded-lg bg-opacity-30 bg-deus-lightest shadow-2xl flex flex-col gap-5 break-all">
			<Screen
				password={password}
				setPassword={setPassword}
				setButtonText={setButtonText}
			/>

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

			<Button title={buttonText} onClick={() => generatePassword()}>
				{buttonText}
			</Button>
		</main>
	);
};

export default Generator;
