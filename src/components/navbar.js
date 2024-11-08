import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

function NavComponent(props) {
	return (
		<nav className="NavComponent">
			<div className="Logo">
				<Link to="/" className="nav-link">
					<img id="logo-btn" title="logo.png" src={logo} />
				</Link>
			</div>
			<div className="nav-links">
				<Link to="/locations" className="nav-link">
					Locations
				</Link>
				<Link to="/events" className="nav-link">
					Events
				</Link>
			</div>
		</nav>
	);
}

export default NavComponent;
