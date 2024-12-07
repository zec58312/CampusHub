import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function HeaderFooterLayout({ props }) {
	return (
		<>
			<Navigation />

			<Container id="page-content-wrapper" className="py-5 position-relative w-100 d-flex justify-content-center" style={{ marginBottom: "15rem", marginTop: "10rem" }}>
				{props.children}
			</Container>

			<Footer />
		</>
	);
}

export default HeaderFooterLayout;
