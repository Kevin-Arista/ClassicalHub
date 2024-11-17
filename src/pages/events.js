import React from "react";
import "./events.css";
import EventCard from "../components/eventCard";

const Events = (props) => {
	const events = [
		{
			name: "Music Festival",
			date: "2024-11-20",
			time: "10:00 AM",
			location: "New York",
		},
		{
			name: "Art Workshop",
			date: "2024-11-21",
			time: "2:00 PM",
			location: "Los Angeles",
		},
		{
			name: "Tech Conference",
			date: "2024-11-25",
			time: "9:00 AM",
			location: "San Francisco",
		},
		{
			name: "Music Festival",
			date: "2024-11-20",
			time: "10:00 AM",
			location: "New York",
		},
		{
			name: "Art Workshop",
			date: "2024-11-21",
			time: "2:00 PM",
			location: "Los Angeles",
		},
		{
			name: "Tech Conference",
			date: "2024-11-25",
			time: "9:00 AM",
			location: "San Francisco",
		},
		{
			name: "Music Festival",
			date: "2024-11-20",
			time: "10:00 AM",
			location: "New York",
		},
		{
			name: "Art Workshop",
			date: "2024-11-21",
			time: "2:00 PM",
			location: "Los Angeles",
		},
		{
			name: "Tech Conference",
			date: "2024-11-25",
			time: "9:00 AM",
			location: "San Francisco",
		},
	];

	return (
		<div className="events">
			<div style={{ height: "11vh" }}></div>
			<h1>Upcoming Events:</h1>
			<div className="events-container">
				<div className="card-container">
					{events.map((event, index) => (
						<EventCard
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
