import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function BareLayout({ children }) {
	return (
		<>
			<Container id="page-content-wrapper" className="py-5 position-relative w-100 d-flex justify-content-center" style={{ marginBottom: "15rem", marginTop: "10rem" }}>
				{children}
			</Container>
		</>
	);
}

export default BareLayout;
