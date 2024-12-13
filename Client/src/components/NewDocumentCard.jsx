import React from "react";
import { Col, Row, Container, Card, Image, ListGroup, Button } from "react-bootstrap";

function NewDocumentCard({ ime, autor, kolegij, glasovi, postotak, datum, opis }) {
	return (
		<Container fluid>
			<Card>
				<Card.Header as="h6">{kolegij}</Card.Header>
				<Card.Body>
					<Row className="align-items-left ">
						<Col>
							<Card.Title>{ime}</Card.Title>
						</Col>
						<Col>
							<i>{autor}</i>
						</Col>
						<Col>{datum}</Col>
						<Col>
							{postotak}% od {glasovi} glasača
						</Col>
						<Col>thumbs</Col>
						<Col>
							<Button variant="primary">Download</Button>
						</Col>
					</Row>
				</Card.Body>
				<Card.Body>
					<h6>Opis:</h6>
					{opis}
				</Card.Body>
			</Card>
		</Container>
	);
}

export default NewDocumentCard;
