interface ButtonProps {
	inactive?: boolean;
	title: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	inactive,
	title,
	onClick,
	disabled = false,
	children,
}) => (
	<button
		className={`rounded-full p-3 bg-opacity-90 hover:bg-opacity-100 ${
			inactive
				? "bg-gray-100 active:bg-gray-300 text-deus active:text-white"
				: "bg-deus-light text-deus-darkest hover:text-deus-dark active:text-white"
		} ${
			disabled ? "cursor-not-allowed" : "active:bg-deus"
		} transition-colors duration-250 ease-in-out`}
		title={title}
		onClick={onClick}
		disabled={disabled}
	>
		{children}
	</button>
);

export default Button;
