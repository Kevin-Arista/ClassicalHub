import React from "react";
import BioCard from "../components/bioCard";
import "./home.css";

function Home(props) {
	return (
		<div className="Home">
			<div className="nav-space"></div>
			<div className="right-column">
				<div className="intro-card">
					<h1 className="welcome">Welcome to</h1>
					<h1 className="classicalhub">Classical Hub!</h1>
					<h1 className="subheading">
						Always Wanted to Learn to Play Classical Music?
					</h1>
				</div>

				<div className="banners-container">
					<h1 className="banner">Explore your musical interest!</h1>

					<h1 className="banner">Find lessons near you!</h1>
				</div>
			</div>
			<BioCard></BioCard>
		</div>
	);
}
export default Home;
