import "./App.css";
import NavComponent from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Locations from "./pages/locations";
import Events from "./pages/events";

function App() {
	return (
		<div className="App">
			<NavComponent></NavComponent>
			<div>
				<Routes>
					<Route path="/" element={Home}></Route>
					<Route path="/locations" element={Locations}></Route>
					<Route path="/events" element={Events}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
