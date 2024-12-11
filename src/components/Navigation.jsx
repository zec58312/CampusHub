import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
	const [expanded, setExpanded] = useState(false);

	return (
		<>
			<Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} fixed="top" expand="lg" className="bg-body-secondary">
				<Container>
					<Navbar.Brand className="">
						<img src="src/assets/logoBijeleOci.png" height="45rem" className="d-inline-block align-middle" alt="Sova" />
						<Link to="/" className="nav-link d-inline-block align-middle">
							CampusHub
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={() => setExpanded(false)}>
								Dokumenti
							</Link>

							<Link to="/forum" className={`nav-link ${location.pathname === "/forum" ? "active" : ""}`} onClick={() => setExpanded(false)}>
								Forum
							</Link>

							<Link to="/myaccount" className={`nav-link ${location.pathname === "/myaccount" ? "active" : ""}`} onClick={() => setExpanded(false)}>
								Moj Račun
							</Link>
						</Nav>
						<Nav className="ml-auto"></Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default Navigation;
