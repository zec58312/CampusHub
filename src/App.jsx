import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import HeaderFooterLayout from "./layouts/HeaderFooterLayout";
import BareLayout from "./layouts/BareLayout";
import Dokumenti from "./pages/Dokumenti";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<HeaderFooterLayout />}>
					<Route path="/dokumenti" element={<Dokumenti />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
