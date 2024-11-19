import React from "react";
import "./bioCard.scss";
import bioPic from "../assets/johnPic.png";

function BioCard(props) {
	return (
		<div className="bioCard">
			<div className="card-container">
				<div className="text-container">
					<h1>Hello, </h1>
					<h1>My name is John!</h1>
					<p>
						John Gonzalez was born and raised in Los Angeles, where he
						discovered his passion for music as a young musician in the Los
						Angeles Philharmonic’s youth orchestra program: Youth Orchestra of
						Los Angeles (YOLA). Over the course of seven years in YOLA, John
						developed his skills and deepened his love for the arts, and it is
						where music went from a hobby to his biggest passion. Currently,
						John is in his last year studying bassoon performance at the USC
						Thornton School of Music, where he is mentored by Shawn Mouser,
						associate principal bassoon of the Los Angeles Philharmonic. Through
						this website, John hopes to inspire the next generation of musicians
						to pursue their passions and explore the transformative power of
						classical music.
					</p>
				</div>
				<div className="vl"></div>
				<img className="bioPicture" alt="profile_pic" src={bioPic}></img>
			</div>
		</div>
	);
}

export default BioCard;
