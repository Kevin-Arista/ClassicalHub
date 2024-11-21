import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Successfully Renders NavBar!", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
	const linkElement = screen.getByText(/home page/i);
	expect(linkElement).toBeInTheDocument();
});
