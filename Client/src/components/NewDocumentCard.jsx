import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";

// fa-flip, fa-beat... - za animaciju ikona

function NewDocumentCard({ ime, autor, kolegij, glasovi, postotak, datum, opis }) {
	return (
		<Container fluid className="mb-3">
			<Card>
				<Card.Header as="h6">{kolegij}</Card.Header>
				<Card.Body className="px-4">
					<Row className="align-items-end">
						<Col md="3" sm="3">
							{/*primjeniti isto na glasove*/}
							<Card.Title className="mb-0" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", lineHeight: "normal" }}>
								{ime}
							</Card.Title>
						</Col>
						<Col md="2" sm="3" className="text-muted">
							<i>autor: {autor}</i>
						</Col>
						<Col md="2" sm="3" className="text-muted">
							objavljeno: {datum}
						</Col>
					</Row>

					<Row className="my-4">
						<Col>
							<h6 className="m-0 ">Opis:</h6>
							{opis}
						</Col>
					</Row>
					<Row className="align-items-end">
						<Col md="3" sm="3" className="text-muted">
							{postotak}% pozitivnih glasova od {glasovi}
						</Col>
						<Col className="d-flex text-primary">
							<div className="mx-2">
								<i className=" fa-regular fa-thumbs-down fa-flip-horizontal fa-xl"></i>
							</div>
							<div>
								<i className="fa-regular fa-thumbs-up fa-xl" style={{ transform: "translateY(-5px)" }}></i>
							</div>
						</Col>
						<Col className="d-flex flex-row-reverse">
							<Button variant="primary">Download</Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default NewDocumentCard;
