import { useState } from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Access from "./pages/Access";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/error" element={<Error />} />
				<Route exact path="/access" element={<Access />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
