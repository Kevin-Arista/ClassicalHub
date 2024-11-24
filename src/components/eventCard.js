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
		<div className="event-card" data-testid="event-card">
			<p className="event-name">{eventName}</p>
			<p className="event-date">
				<FaCalendarAlt />
				{new Date(eventDate + "T00:00:00-08:00").toDateString()}
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
