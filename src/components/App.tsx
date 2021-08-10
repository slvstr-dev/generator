import Generator from "./Generator";
import Footer from "./Footer";
import Particles from "./Particles";
import Header from "./Header";

const App: React.FC = () => (
	<>
		<Particles />

		<div className="relative min-h-screen flex flex-col items-center justify-center">
			<Header />

			<Generator />

			<Footer />
		</div>
	</>
);

export default App;
