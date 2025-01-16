import React, { useState } from "react";
import NewDocumentCard from "../components/NewDocumentCard";
import FilterForm from "../components/FilterForm";
import { Container, Row, Col } from "react-bootstrap";

function Dokumenti() {
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

	const [filteredDocuments, setFilteredDocuments] = useState(allDocuments);

	const applyFilters = (filters) => {
		const filtered = allDocuments.filter((doc) => {
			return (
				(filters.fakultet ? doc.fakultet === filters.fakultet : true) &&
				(filters.smijer ? doc.smijer === filters.smijer : true) &&
				(filters.godina ? doc.godina === filters.godina : true) &&
				(filters.kolegij ? doc.kolegij === filters.kolegij : true)
			);
		});
		setFilteredDocuments(filtered);
	};

	return (
		<Container className="p-0 mx-lg-5">
			<Container
				fluid
				className=" rounded-4 mb-3 p-4"
				style={{ background: " rgb(42,157,152)", background: "linear-gradient(90deg, rgba(42,157,152,1) 0%, rgba(40,139,153,1) 52%, rgba(17,112,125,1) 100%)" }}
			>
				<Row>
					<h3 className="mb-4" style={{ textAlign: "center" }}>
						<b>Odaberi kolegij</b>
					</h3>
					<FilterForm applyFilters={applyFilters} />
				</Row>
			</Container>

			<Row className="d-flex flex-wrap">
				{filteredDocuments.length > 0 ? (
					filteredDocuments.map((doc, index) => (
						<NewDocumentCard key={index} ime={doc.ime} autor={doc.autor} postotak={doc.postotak} glasovi={doc.glasovi} datum={doc.datum} opis={doc.opis} kolegij={doc.kolegij} fileUrl={doc.fileUrl} />
					))
				) : (
					<p>No documents found</p>
				)}
			</Row>
		</Container>
	);
}

export default Dokumenti;
