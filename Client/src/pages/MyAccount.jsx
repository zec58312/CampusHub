import { React, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import MyAccountDocumentCard from "../components/MyAccountDocumentCard";

const allDocuments = [
	{
		ime: "MojDokument.pdf",
		autor: "Ana Anić",
		postotak: "75",
		glasovi: "80",
		datum: "1.12.2024.",
		opis: "Primjer riješenih zadataka na laboratorijskim vježbama",
		kolegij: "Programiranje 1",
		fakultet: "FESB",
		smijer: "Računarstvo",
		godina: "1.",
	},
	{
		ime: "SkriptaRadnaVerzija.pdf",
		autor: "Ivo Ivić",
		postotak: "91",
		glasovi: "100",
		datum: "11.11.2024.",
		opis: "Kratki opis",
		kolegij: "Programsko Inženjerstvo",
		fakultet: "PMF",
		smijer: "Elektro",
		godina: "2.",
	},
	{
		ime: "NajboljaSkriptaIkad.pdf",
		autor: "Marija Marić",
		postotak: "20",
		glasovi: "10",
		datum: "1.12.2024.",
		opis: "No comment.",
		kolegij: "Programiranje 2",
		fakultet: "FESB",
		smijer: "Računarstvo",
		godina: "2.",
		fileUrl: "/path-to-pdf/MojDokument.pdf",
	},
];

function MyAccount() {
	return (
		<div>
			{/* vidi w3schools tutorial kako uploadati dokument, drag and drop...*/}
			{/*link na njihov servera:*/}
			{/* <form action="">
				<input type="file" id="myFile" name="filename" />
				<input type="submit" />
			</form> */}
			<Card style={{ background: "#f0f0f0", border: "none" }}>
				<Card.Body>
					{/* privremena boja pozadine */}
					<Container>
						<Row className="d-flex align-items-end">
							<Col>
								<h4 className="my-0">Moje Ime</h4>
							</Col>
							<Col>
								<h6 className="my-0">@MojUsername</h6>
							</Col>
							<Col className="d-flex justify-content-end">
								<Button className="mx-2">Novi Dokument</Button>
								<Button>Odjava</Button>
							</Col>
						</Row>
					</Container>
				</Card.Body>
			</Card>

			<Container>
				<h5>Moji dokumenti</h5>
				<Row className="d-flex flex-wrap">
					{allDocuments.map((doc, index) => (
						<MyAccountDocumentCard
							key={index}
							ime={doc.ime}
							autor={doc.autor}
							postotak={doc.postotak}
							glasovi={doc.glasovi}
							datum={doc.datum}
							opis={doc.opis}
							kolegij={doc.kolegij}
							fileUrl={doc.fileUrl}
						/>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default MyAccount;
