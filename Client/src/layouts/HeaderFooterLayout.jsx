import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function HeaderFooterLayout({ children }) {
	return (
		<>
			<Navigation />

			<Container id="page-content-wrapper" className=" position-static w-100 d-flex justify-content-center" style={{ marginBottom: "10rem", marginTop: "10rem" }}>
				{children}
				<Outlet />
			</Container>

			<Footer />
		</>
	);
}

export default HeaderFooterLayout;
