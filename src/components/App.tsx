import Sketch from "react-p5";
import p5Types from "p5";
import "./App.scss";

const App: React.FC = () => {
	let particles: any = [];

	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(
			canvasParentRef
		);

		const particlesLength = Math.min(
			Math.floor(window.innerWidth / 10),
			100
		);

		for (let i = 0; i < particlesLength; i++) {
			particles.push({
				position: p5.createVector(
					p5.random(p5.width),
					p5.random(p5.height)
				),
				velocity: p5.createVector(
					p5.random(-0.5, 0.5),
					p5.random(-0.5, 0.5)
				),
				size: 5,
				update() {
					this.position.add(this.velocity);
					this.edges();
				},
				draw() {
					p5.noStroke();
					p5.fill("rgba(148, 22, 127, .5)");
					p5.circle(this.position.x, this.position.y, this.size * 2);
				},
				edges() {
					if (this.position.x < 0 || this.position.x > p5.width) {
						this.velocity.x *= -1;
					}

					if (this.position.y < 0 || this.position.y > p5.height) {
						this.velocity.y *= -1;
					}
				},
				checkParticles(particles: any) {
					particles.forEach((particle: any) => {
						const d = p5.dist(
							this.position.x,
							this.position.y,
							particle.position.x,
							particle.position.y
						);

						if (d < 120) {
							const alpha = p5.map(d, 0, 120, 0, 0.25);

							p5.stroke(`rgba(233, 52, 121, ${alpha})`);
							p5.line(
								this.position.x,
								this.position.y,
								particle.position.x,
								particle.position.y
							);
						}
					});
				},
			});
		}
	};

	const draw = (p5: p5Types) => {
		p5.background("rgb(48, 3, 80)");

		particles.forEach((particle: any, idx: any) => {
			particle.update();
			particle.draw();
			particle.checkParticles(particles.slice(idx));
		});
	};

	return (
		<main className="app">
			<Sketch setup={setup} draw={draw} />

			<h1 className="app__title">Password generator</h1>
		</main>
	);
};

export default App;