interface ButtonProps {
	color?: string;
	inactive?: boolean;
	title: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	color = "green",
	inactive,
	title,
	onClick,
	disabled = false,
	children,
}) => (
	<button
		className={`rounded-md p-3 ${
			inactive
				? "bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
				: `bg-${color}-400`
		} ${
			disabled
				? "cursor-not-allowed"
				: `hover:bg-${color}-500 active:bg-${color}-600`
		}`}
		title={title}
		onClick={onClick}
		disabled={disabled}
	>
		{children}
	</button>
);

export default Button;
