import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Login() {
	return (
		<>
			<div style={{ position: "relative", top: "0", left: "0" }}>
				<img src="src/assets/logoPozadina.png" alt="CampusHub logo" style={{ width: "10rem", position: "relative", top: "-5rem", left: "0px", zIndex: "5" }} />
				<Card className="rounded-4 pt-5" style={{ minWidth: "22rem", position: "absolute", top: "0px", left: "0px" }}>
					<Card.Body>
						<Form className="d-flex flex-column align-items-center">
							<Form.Group className="mb-3 w-100 d-flex flex-column align-items-center" controlId="loginFormUsername">
								<Form.Label>Username</Form.Label>
								<Form.Control type="text" placeholder="Upiši username" />
							</Form.Group>

							<Form.Group className="mb-3 w-100 d-flex flex-column align-items-center" controlId="loginFormPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>

							<Button className="mt-3" variant="primary" type="submit">
								Prijava
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}

export default Login;
