import React from "react";
import "./infoCard.scss";
import externalLink from "../assets/external-link.png";
import phone from "../assets/phone-call.png";

function InfoCard(props) {
	return (
		<div className="infoCard">
			<h1>YOLA</h1>
			<hr />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
				placerat risus sed risus pharetra, vitae blandit purus suscipit. Integer
				sagittis dictum venenatis. Fusce felis felis, sollicitudin eu magna vel,
				laoreet porta quam. Mauris at pharetra lorem. Nulla enim mi, consequat
				at neque at, suscipit blandit risus. Donec consectetur nisi cursus urna
				tristique, eu dictum augue luctus.
			</p>
			<div className="icon-row">
				<a href="https://www.laphil.com/learn/yola/youth-orchestra-los-angeles">
					<img src={externalLink} />
				</a>
				<img src={phone} />
			</div>
		</div>
	);
}

export default InfoCard;
