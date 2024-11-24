import React from "react";
import "./eventCard.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function EventCard({
	eventName = "NULL",
	eventDate = "NULL",
	eventTime = "NULL",
	eventLocation = "NULL",
}) {
	return (
		<div className="event-card">
			<p className="event-name">{eventName}</p>
			<p className="event-date">
				<FaCalendarAlt /> {eventDate}
			</p>
			<p className="event-time">
				<FaClock /> {eventTime}
			</p>
			<p className="event-location">
				<FaMapMarkerAlt /> {eventLocation}
			</p>
		</div>
	);
}
export default EventCard;
