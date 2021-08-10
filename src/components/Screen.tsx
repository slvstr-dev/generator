import { useState } from "react";
import Button from "./elements/Button";
import Text from "./elements/Text";
import { ReactComponent as Floppy } from "./svg/floppy.svg";

interface ScreenProps {
	password: string;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Screen: React.FC<ScreenProps> = ({
	password,
	setButtonText,
	setPassword,
}) => {
	const [screenText, setScreenText] = useState("Select length & options");

	return password === "" ? (
		<Text classNames="py-6 text-center" text={screenText.toUpperCase()} />
	) : (
		<Text
			classNames="flex items-center justify-between gap-3"
			text={password}
		>
			<Button
				title="Save password to clipboard"
				onClick={() => {
					navigator.clipboard.writeText(password).then(() => {
						setScreenText("Saved to clipboard");
						setButtonText("Generate new password");
						setPassword("");
					});
				}}
			>
				<Floppy />
			</Button>
		</Text>
	);
};

export default Screen;
