interface TextProps {
	classNames?: string;
	text: string;
	hasSaveButton?: boolean;
	children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ classNames, text, children }) => (
	<div className={`bg-gray-200 rounded-md p-3 ${classNames}`}>
		{text}

		{children}
	</div>
);

export default Text;
