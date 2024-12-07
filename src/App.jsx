import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import HeaderFooterLayout from "./layouts/HeaderFooterLayout";
import BareLayout from "./layouts/BareLayout";
import Dokumenti from "./pages/Dokumenti";
import Forum from "./pages/Forum";
import MyAccount from "./pages/MyAccount";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<HeaderFooterLayout />}>
					<Route path="/dokumenti" element={<Dokumenti />} />
					<Route path="/forum" element={<Forum />} />
					<Route path="/myaccount" element={<MyAccount />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
