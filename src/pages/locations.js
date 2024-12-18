import React from "react";
import "./locations.css";
import InfoCard from "../components/infoCard";
import nonProfits from "../db/nonProfits-db.js";

function Locations(props) {
	return (
		<div className="Locations">
			<div style={{ height: "15vh" }}></div>
			<iframe
				title="mymap"
				className="map-container"
				src="https://www.google.com/maps/d/u/7/embed?mid=1NIg4BgSx5HuC3NKGj6psfsecvW4yDqg&ehbc=2E312F&noprof=1"
				width="640"
				height="480"></iframe>
			<h1 className="learnmore">Learn More Below!</h1>
			<div className="info-cards-container">
				{nonProfits.map((org, index) => (
					<InfoCard
						key={index}
						orgName={org.name}
						description={org.description}
						link={org.link}></InfoCard>
				))}
			</div>
		</div>
	);
}
export default Locations;
