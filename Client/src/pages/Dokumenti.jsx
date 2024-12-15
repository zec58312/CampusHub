import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NewDocumentCard from "../components/NewDocumentCard";
import FilterForm from "../components/FilterForm";
import { Container, Row, Col } from "react-bootstrap";

function Dokumenti() {
	const [dokumenti, postaviDokumente] = useState([]);

	useEffect(() => {
		axios.get("").then((res) => postaviDokumente(res.data)); //dodati link na API
	}, []);

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
				</Container>
				<Row className="d-flex flex-wrap">
					{dokumenti.map((d) => (
						<NewDocumentCard key={d.documentID} dokumenti={d} />
					))}
				</Row>
			</Container>
		</>
	);
}

export default Dokumenti;
