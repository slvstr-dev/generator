const Footer: React.FC = () => (
	<footer className="text-center">
		<a
			className="text-yellow-400"
			href="https://slvstr.dev"
			target="_blank"
			rel="noreferrer"
		>
			&copy; {new Date().getFullYear()} slvstr.dev
		</a>
	</footer>
);

export default Footer;
