import React from "react";
import DocumentCard from "../components/DocumentCard";
import NewDocumentCard from "../components/NewDocumentCard";
import { Container, Row, Col, Card } from "react-bootstrap";

function Dokumenti() {
	return (
		<>
			<Container className="p-0">
				<Container fluid className="bg-body-secondary rounded-4 mb-3 p-4">
					<Row>
						<h3 className="mb-4" style={{ textAlign: "left" }}>
							Odaberi kolegij
						</h3>
					</Row>
					<Row>
						<Col style={{ textAlign: "left" }}>
							<form></form>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Card>
						<Card.Body>
							<Row className="align-items-left ">
								<Col>
									<Card.Title>Naziv</Card.Title>
								</Col>
								<Col>
									<i>Autor</i>
								</Col>
								<Col>Datum objave</Col>
								<Col>Ocjena</Col>
								{/* <Col>thumbs</Col>
							<Col>
								<Button variant="primary">Download</Button>
							</Col> */}
							</Row>
						</Card.Body>
					</Card>
				</Container>
				<Row className="d-flex flex-wrap">
					<NewDocumentCard
						ime="MojDokument.pdf"
						autor="Ana Anić"
						postotak="75"
						datum="1.12.2024."
						opis="Lorem ipsum ewuofh siof  es wf dg erwefwfe sdfsdfadq efwef"
						kolegij="Programiranje"
					></NewDocumentCard>
					<NewDocumentCard ime="SkriptaRadnVerzija.pdf" autor="Ivo Ivić" postotak="91" datum="11.11.2024." opis="Kratki opis" kolegij="Programsko Inženjerstvo"></NewDocumentCard>
					<NewDocumentCard ime="NajboljaSkriptaIkad.pdf" autor="Ivana Ivanković" postotak="95" datum="1.12.2024." opis="No comment." kolegij="Programiranje 2"></NewDocumentCard>
				</Row>
			</Container>
		</>
	);
}

export default Dokumenti;
