import { render, screen } from "@testing-library/react";
import Events from "./events.js";
import events from "../db/event-db.js";

describe("Events Page: ", () => {
	let page;

	beforeEach(() => {
		page = render(<Events></Events>);
	});

	test("renders all Upcoming EventCards", () => {
		const eventCards = screen.getAllByTestId("event-card");

		const upcomingEvents = events.filter((event) => {
			const now = new Date();
			const eventDate = new Date(event.date + "T00:00:00-08:00");
			return eventDate >= now;
		});

		expect(eventCards.length).toBe(upcomingEvents.length); // Replace 3 with the expected number of events
	});
});
