// Adjusted/rewritten component based on: https://codepen.io/FlorinPop17/full/wvvrbmY
import Sketch from "react-p5";
import p5Types from "p5";

type Particle = {
	position: p5Types.Vector;
	velocity: p5Types.Vector;
	draw: () => void;
	update: () => void;
	connectParticles: (particles: Particle[]) => void;
};

const Particles: React.FC = () => {
	let particles: Particle[] = [];

	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(
			canvasParentRef
		);

		const particlesAmount = Math.min(
			Math.floor(window.innerWidth / 10),
			100
		);

		for (let i = 0; i < particlesAmount; i++) {
			particles.push({
				position: p5.createVector(
					p5.random(p5.width),
					p5.random(p5.height)
				),
				velocity: p5.createVector(
					p5.random(-0.2, 0.2),
					p5.random(-0.2, 0.2)
				),
				draw() {
					p5.noStroke();
					p5.fill("rgb(208, 144, 47)");
					p5.circle(this.position.x, this.position.y, 5);
				},
				update() {
					this.position.add(this.velocity);
					if (this.position.x < 0 || this.position.x > p5.width) {
						this.velocity.x *= -1;
					}

					if (this.position.y < 0 || this.position.y > p5.height) {
						this.velocity.y *= -1;
					}
				},
				connectParticles(particles) {
					particles.forEach((particle) => {
						const distance = p5.dist(
							this.position.x,
							this.position.y,
							particle.position.x,
							particle.position.y
						);

						if (distance < 100) {
							p5.stroke("rgba(255, 246, 159, .2)");
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

		particles.forEach((particle, index) => {
			particle.update();
			particle.draw();
			particle.connectParticles(particles.slice(index));
		});
	};

	return <Sketch className="fixed inset-0" setup={setup} draw={draw} />;
};

export default Particles;
