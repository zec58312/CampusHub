import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import HeaderFooterLayout from "./layouts/HeaderFooterLayout";
import BareLayout from "./layouts/BareLayout";
import Dokumenti from "./pages/Dokumenti";
import Forum from "./pages/Forum";
import MyAccount from "./pages/MyAccount";
import ViewDocument from "./components/ViewDocument";
import NewDocumentCard from "./components/NewDocumentCard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<HeaderFooterLayout />}>
					<Route index element={<Dokumenti />} />
					<Route path="/forum" element={<Forum />} />
					<Route path="/myaccount" element={<MyAccount />} />
				</Route>

				<Route path="/view-document" element={<ViewDocument />} />

				<Route path="/" element={<NewDocumentCard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
