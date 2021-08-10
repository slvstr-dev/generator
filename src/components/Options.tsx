import Button from "./elements/Button";
import Text from "./elements/Text";
import { ReactComponent as Lowercase } from "./svg/lowercase.svg";
import { ReactComponent as Uppercase } from "./svg/uppercase.svg";
import { ReactComponent as Number } from "./svg/number.svg";
import { ReactComponent as Symbol } from "./svg/symbol.svg";
import { ReactComponent as Plus } from "./svg/plus.svg";
import { ReactComponent as Minus } from "./svg/minus.svg";

interface OptionsProps {
	length: number;
	setLength: React.Dispatch<React.SetStateAction<number>>;
	useLowercase: boolean;
	setUseLowercase: React.Dispatch<React.SetStateAction<boolean>>;
	useUppercase: boolean;
	setUseUppercase: React.Dispatch<React.SetStateAction<boolean>>;
	useNumbers: boolean;
	setUseNumbers: React.Dispatch<React.SetStateAction<boolean>>;
	useSymbols: boolean;
	setUseSymbols: React.Dispatch<React.SetStateAction<boolean>>;
}

const Options: React.FC<OptionsProps> = ({
	length,
	setLength,
	useLowercase,
	setUseLowercase,
	useUppercase,
	setUseUppercase,
	useNumbers,
	setUseNumbers,
	useSymbols,
	setUseSymbols,
}) => {
	const hasMultipleActiveOptions =
		[useLowercase, useUppercase, useNumbers, useSymbols].filter(Boolean)
			.length > 1;

	return (
		<>
			<div className="mt-5 flex justify-between gap-5">
				<Button
					inactive={length <= 4}
					title="Decrease password length"
					onClick={() => length > 4 && setLength(length - 1)}
				>
					<Minus />
				</Button>

				<Text
					classNames="flex-grow text-center"
					text={length.toString()}
				/>

				<Button
					inactive={length >= 24}
					title="Increase password length"
					onClick={() => length < 24 && setLength(length + 1)}
				>
					<Plus />
				</Button>
			</div>

			<div className="mb-5 flex justify-between gap-5">
				<Button
					inactive={!useLowercase}
					title="Include lowercase letters"
					onClick={() =>
						(useUppercase || useNumbers || useSymbols) &&
						setUseLowercase(!useLowercase)
					}
					disabled={useLowercase && !hasMultipleActiveOptions}
				>
					<Lowercase />
				</Button>

				<Button
					inactive={!useUppercase}
					title="Include uppercase letters"
					onClick={() =>
						(useLowercase || useNumbers || useSymbols) &&
						setUseUppercase(!useUppercase)
					}
					disabled={useUppercase && !hasMultipleActiveOptions}
				>
					<Uppercase />
				</Button>

				<Button
					inactive={!useNumbers}
					title="Include numbers"
					onClick={() =>
						(useLowercase || useUppercase || useSymbols) &&
						setUseNumbers(!useNumbers)
					}
					disabled={useNumbers && !hasMultipleActiveOptions}
				>
					<Number />
				</Button>

				<Button
					inactive={!useSymbols}
					title="Include symbols"
					onClick={() =>
						(useLowercase || useUppercase || useNumbers) &&
						setUseSymbols(!useSymbols)
					}
					disabled={useSymbols && !hasMultipleActiveOptions}
				>
					<Symbol />
				</Button>
			</div>
		</>
	);
};

export default Options;
