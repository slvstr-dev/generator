import Button from "./elements/Button";
import Text from "./elements/Text";
import { ReactComponent as Floppy } from "./svg/floppy.svg";

interface ScreenProps {
	password: string;
}

const Screen: React.FC<ScreenProps> = ({ password }) =>
	password === "" ? (
		<Text classNames="p-6 text-center" text={"Select length and options"} />
	) : (
		<Text
			classNames="flex items-center justify-between gap-5"
			text={password}
		>
			<Button
				title="Save password to clipboard"
				onClick={() => {
					navigator.clipboard.writeText(password);
				}}
			>
				<Floppy />
			</Button>
		</Text>
	);

export default Screen;
