import React from "react";
import "./bioCard.scss";

function BioCard(props) {
	return (
		<div className="bioCard">
			<div className="card-container">
				<div className="text-container">
					<h1>Hello, </h1>
					<h1>My name is John!</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamc. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamc
					</p>
				</div>
				<div className="vl"></div>
				<img
					className="bioPicture"
					alt="profile_pic"
					src="https://thenoblepaw.com/wp-content/uploads/2022/03/Dachshund.jpg"></img>
			</div>
		</div>
	);
}

export default BioCard;
