const Footer: React.FC = () => (
	<footer className="py-5 sm:py-10 text-center">
		<a
			className="text-deus-lightest"
			href="https://slvstr.dev"
			target="_blank"
			rel="noreferrer"
		>
			&copy; {new Date().getFullYear()} slvstr.dev
		</a>
	</footer>
);

export default Footer;
