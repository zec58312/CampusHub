import React from "react";
import NewDocumentCard from "../components/NewDocumentCard";
import FilterForm from "../components/FilterForm";
import { Container, Row, Col } from "react-bootstrap";

function Dokumenti() {
	return (
		<>
			<Container className="p-0 mx-lg-5">
				<Container fluid className="bg-body-secondary rounded-4 mb-3 p-4">
					<Row>
						<h3 className="mb-4" style={{ textAlign: "left" }}>
							Odaberi kolegij
						</h3>
						<FilterForm />
					</Row>
					<Row>
						<Col style={{ textAlign: "left" }}>
							<form></form>
						</Col>
					</Row>
				</Container>
				<Row className="d-flex flex-wrap">
					<NewDocumentCard
						ime="MojDokument.pdf"
						autor="Ana&nbsp;Anić"
						postotak="75"
						glasovi="80"
						datum="1.12.2024."
						opis="Lorem ipsum ewuofh siof  es wf dg erwefwfe sdfsdfadq efwef"
						kolegij="Programiranje"
					></NewDocumentCard>
					<NewDocumentCard ime="SkriptaRadnaVerzija.pdf" autor="Ivo&nbsp;Ivić" postotak="91" glasovi="100" datum="11.11.2024." opis="Kratki opis" kolegij="Programsko Inženjerstvo"></NewDocumentCard>
					<NewDocumentCard ime="NajboljaSkriptaIkad.pdf" autor="Marija&nbsp;Marić" postotak="20" glasovi="10" datum="1.12.2024." opis="No comment." kolegij="Programiranje 2"></NewDocumentCard>
				</Row>
			</Container>
		</>
	);
}

export default Dokumenti;
