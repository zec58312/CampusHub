import React from "react";
import { Col, Row, Container, Card, Image, ListGroup, Button } from "react-bootstrap";

function NewDocumentCard({ ime, autor, kolegij, glasovi, postotak, datum, opis }) {
	return (
		<Container fluid>
			<Row>{kolegij}</Row>
			<Row>
				<Col>PDF</Col>
				<Col>{ime}</Col>
				<Col>{autor}</Col>
				<Col>{datum}</Col>
				<Col>
					{postotak}% od {glasovi} glasača
				</Col>
				<Col>thumbs up</Col>
				<Col>Download</Col>
			</Row>
			<Row>{opis}</Row>
		</Container>
	);
}

export default NewDocumentCard;
