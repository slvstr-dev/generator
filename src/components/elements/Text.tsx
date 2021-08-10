interface TextProps {
	classNames?: string;
	text: string;
	hasSaveButton?: boolean;
	children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ classNames, text, children }) => (
	<div className={`rounded-lg bg-opacity-95 bg-white p-3 ${classNames}`}>
		{text}

		{children}
	</div>
);

export default Text;
