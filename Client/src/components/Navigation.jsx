import { useState, useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

function Navigation() {
	const [expanded, setExpanded] = useState(false);
	const user = useContext(UserContext);

	return (
		<>
			<Navbar
				expanded={expanded}
				onToggle={() => setExpanded(!expanded)}
				fixed="top"
				expand="lg"
				style={{ background: " rgb(183,223,197)", background: "linear-gradient(90deg, rgba(183,223,197,1) 20%, rgba(10,125,154,1) 60%, rgba(4,50,110,1) 100%)" }}
			>
				<Container className="d-flex">
					<Navbar.Brand className="">
						<img src="src/assets/logoBijeleOci.png" height="45rem" className="d-inline-block align-middle" alt="Sova" />
						<b>
							<Link to="/" className="nav-link d-inline-block align-middle">
								CampusHub
							</Link>
						</b>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: "#b7dfc5" }} /> {/*burger meni koji se prikaze kada je navbar collapsed */}
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto d-flex w-100">
							<Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={() => setExpanded(false)}>
								Dokumenti
							</Link>

							<Link to="/forum" style={{ marginRight: "auto" }} className={`nav-link ${location.pathname === "/forum" ? "active" : ""}`} onClick={() => setExpanded(false)}>
								Forum
							</Link>

							{user === "guest" ? (
								<Link to="/login" style={{ textDecoration: "none" }}>
									{/* kada se promijeni expanded, botun se prebrzo pomakne - za rijesiti kasnije */}
									<Button
										style={{ background: "#b7dfc5", marginLeft: expanded ? "0px" : "auto" }}
										className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}
										onClick={() => setExpanded(false)}
									>
										Prijava
									</Button>
								</Link>
							) : (
								<Link to="/myaccount" style={{ textDecoration: "none" }}>
									{/* kada se promijeni expanded, botun se prebrzo pomakne - za rijesiti kasnije */}
									<Button
										style={{ background: "#b7dfc5", marginLeft: expanded ? "0px" : "auto" }}
										className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}
										onClick={() => setExpanded(false)}
									>
										Moj Račun
									</Button>
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default Navigation;
