import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Successfully Renders NavBar!", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
	const linkLocations = screen.getByText(/Locations/);
	const linkEvents = screen.getByText(/Events/);

	expect(linkLocations).toBeInTheDocument();
	expect(linkEvents).toBeInTheDocument();

	const logoImage = screen.getByAltText("app logo");
	expect(logoImage).toBeInTheDocument();
	expect(logoImage).toHaveAttribute("src", "logo.png");
});
