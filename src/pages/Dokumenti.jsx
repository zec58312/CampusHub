import React from "react";
import DocumentCard from "../components/DocumentCard";
import NewDocumentCard from "../components/NewDocumentCard";
import { Container, Row, Col } from "react-bootstrap";

function Dokumenti() {
	return (
		<>
			<Container className="p-0">
				<Container fluid className="bg-body-secondary rounded-4 mb-3 p-4">
					<Row>
						<h1 className="mb-4" style={{ textAlign: "left" }}>
							Ovde ce bit filteri
						</h1>
					</Row>
					<Row>
						<Col style={{ textAlign: "left" }}>
							<p>aaaaaaaaaaaaaa</p>
						</Col>
					</Row>
				</Container>
				<Row className="d-flex flex-wrap">
					{/* <DocumentCard name="Moj Doc" />
					<DocumentCard name="Moj Doc" />
					<DocumentCard name="Moj Doc" />
					<DocumentCard name="Moj Doc" />
					<DocumentCard name="Moj Doc" /> */}
					<NewDocumentCard
						ime="MojDokument.pdf"
						autor="Ana Anić"
						postotak="91"
						datum="1.1.2001."
						opis="Lorem ipsum jskdfhhksdvgiusgab osuefhj iowhf eufgo  ieufghn ewuofh siof  es wf dg erwefwfe sdfsdfadq efwef"
						kolegij="Programiranje"
					></NewDocumentCard>
				</Row>
			</Container>
		</>
	);
}

export default Dokumenti;
