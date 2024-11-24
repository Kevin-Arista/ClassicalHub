import React from "react";
import "./events.css";
import EventCard from "../components/eventCard";
import events from "../db/event-db.js";
const Events = (props) => {
	events.sort((a, b) => {
		if (a.date.slice(5, 7) < b.date.slice(5, 7)) return -1;
		if (a.date.slice(5, 7) > b.date.slice(5, 7)) return 1;

		if (a.date.slice(8) < b.date.slice(8)) return -1;
		if (a.date.slice(8) > b.date.slice(8)) return 1;
	});

	return (
		<div className="events">
			<div style={{ height: "11vh" }}></div>
			<h1>Upcoming Events:</h1>
			<div className="events-container">
				<div className="card-container">
					{events.map((event, index) => (
						<EventCard
							data-testid="event-card"
							key={index}
							eventName={event.name}
							eventDate={event.date}
							eventLocation={event.location}
							eventTime={event.time}></EventCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Events;
