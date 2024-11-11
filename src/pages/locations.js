import React from "react";
import "./locations.css";
import InfoCard from "../components/infoCard";

function Locations(props) {
	return (
		<div className="Locations">
			<div style={{ height: "15vh" }}></div>
			<iframe
				className="map-container"
				title="map-container"
				src="https://www.google.com/maps/d/u/0/embed?mid=14HR6Ov6_nQwviTEIL-HuIDPG4RVCNDY&ehbc=2E312F"></iframe>
			<div className="info-cards-container">
				<div className="card-row">
					<InfoCard></InfoCard>
					<InfoCard></InfoCard>
				</div>
				<div className="card-row">
					<InfoCard></InfoCard>
					<InfoCard></InfoCard>
				</div>
			</div>
			<div className="card-row">
				<InfoCard></InfoCard>
				<InfoCard></InfoCard>
			</div>
		</div>
	);
}
export default Locations;
