import React from "react";
import "./infoCard.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

function InfoCard({
	orgName = "Lorem",
	description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat risus sed risus pharetra, vitae blandit purus suscipit. Integer sagittis dictum venenatis. Fusce felis felis, sollicitudin eu magna vel, laoreet porta quam. Mauris at pharetra lorem. Nulla enim mi, consequat at neque at, suscipit blandit risus. Donec consectetur nisi cursus urna tristique, eu dictum augue luctus.",
	link = "/locations",
}) {
	return (
		<div className="infoCard">
			<h1>{orgName}</h1>
			<hr />
			<p className="description">{description}</p>
			<p className="connect">
				<strong>Connect: </strong>
			</p>

			<div className="icon-row">
				<a href={link} target="_blank" rel="noopener noreferrer">
					<FaExternalLinkAlt size={50} color="black" />
				</a>
			</div>
		</div>
	);
}

export default InfoCard;
