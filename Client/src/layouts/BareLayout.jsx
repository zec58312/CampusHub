import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function BareLayout({ children }) {
	return (
		<>
			{/* style={{ marginBottom: "15rem", marginTop: "10rem" }} */}
			<Container
				id="page-content-wrapper"
				className="py-5 position-relative w-100 d-flex justify-content-center my-5 flex-1"
				style={{
					backgroundColor: "#B9C9A6",
				}}
			>
				<Outlet />
			</Container>
		</>
	);
}

export default BareLayout;
