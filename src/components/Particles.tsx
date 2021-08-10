import Sketch from "react-p5";
import p5Types from "p5";

const Particles: React.FC = () => {
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
					p5.fill("rgba(253, 216, 112, .5)");
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

							p5.stroke(`rgba(255, 246, 159, ${alpha})`);
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
		p5.background("rgb(53, 20, 9)");

		particles.forEach((particle: any, idx: any) => {
			particle.update();
			particle.draw();
			particle.checkParticles(particles.slice(idx));
		});
	};

	return (
		<Sketch
			className="fixed top-0 left-0 right-0 bottom-0 z-0"
			setup={setup}
			draw={draw}
		/>
	);
};

export default Particles;
