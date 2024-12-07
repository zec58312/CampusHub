import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
	const [expanded, setExpanded] = useState(false);

	return (
		<>
			<Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} fixed="top" expand="lg" className="bg-body-secondary">
				<Container>
					<Navbar.Brand className="">
						<Nav.Link>
							<a href="#" style={{ marginRight: "0.5rem", pointerEvents: "none" }}>
								<i className="fa-solid fa-handshake-angle fa-xl"></i>
							</a>
							Platforma za volontiranje
						</Nav.Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>Aktivnosti</Nav.Link>
							<Nav.Link>Volonteri</Nav.Link>
							<Nav.Link>Udruge</Nav.Link>
						</Nav>
						<Nav className="ml-auto"></Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default Navigation;
