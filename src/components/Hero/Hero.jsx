import React from "react";

//Style
import "./Hero.scss";

//Image
import devicesImg from "../../assets/svg/illustration-devices.svg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__inner">
					<img className="hero__img" src={devicesImg} alt="illustration-devices" />
					<div className="hero__content">
						<div className="hero__content-about">
							<span className="hero__content-about-badge">New</span>
							<span className="hero__content-about-subtitle">Monograph dashboard</span>
						</div>
						<h1 className="hero__content-title">Powerful insights into your team</h1>
						<p className="hero__content-text">Project planning and time tracking for agile teams</p>
						<div className="hero__content-cta">
							<a href="#!" className="btn">
								Schedule a demo
							</a>
							<span className="hero__content-cta-preview">To see a preview</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
