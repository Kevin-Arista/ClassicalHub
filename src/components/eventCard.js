import React from "react";
import "./eventCard.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function EventCard(props) {
	return (
		<div className="event-card">
			<p className="event-name">{props.eventName}</p>
			<p className="event-date">
				<FaCalendarAlt /> {new Date(props.eventDate).toLocaleDateString()}
			</p>
			<p className="event-time">
				<FaClock /> {props.eventTime}
			</p>
			<p className="event-location">
				<FaMapMarkerAlt /> {props.eventLocation}
			</p>
		</div>
	);
}
export default EventCard;
