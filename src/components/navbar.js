import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavComponent(props) {
	return (
		<div className="NavComponent">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/locations">Locations</Link>
				</li>
				<li>
					<Link to="/events">Events</Link>
				</li>
			</ul>
		</div>
	);
}

export default NavComponent;