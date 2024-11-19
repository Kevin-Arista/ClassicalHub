import React from "react";
import "./events.css";
import EventCard from "../components/eventCard";

const Events = (props) => {
	const events = [
		{
			name: "LAYO Concert",
			date: "2024-11-25",
			time: "7:30 PM",
			location: "131 S St. John Ave Pasadena, CA 91123",
		},
		{
			name: "Sounds like LA Holiday Concert",
			date: "2024-12-15",
			time: "3:00 PM",
			location: "1225 Broadway, Santa Monica",
		},
		{
			name: "ICYOLA Symphony Christmas Concert",
			date: "2024-12-21",
			time: "6:00 PM",
			location: "4401 W. 8th St., Los Angeles, CA, 90005",
		},
		{
			name: "Pasadena Youth Symphony Winter Concert",
			date: "2024-12-07",
			time: "7:00 PM",
			location: "131 S St. John Ave Pasadena, CA 91123",
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
