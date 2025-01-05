import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

function FilterForm({ applyFilters }) {
	// Stati za filtre
	const [fakultet, setFakultet] = useState("");
	const [smijer, setSmijer] = useState("");
	const [godina, setGodina] = useState("");
	const [kolegij, setKolegij] = useState("");

	// Funkcija za promjenu filtera
	const handleFilterChange = (e) => {
		const { name, value } = e.target;
		if (name === "fakultet") setFakultet(value);
		if (name === "smijer") setSmijer(value);
		if (name === "godina") setGodina(value);
		if (name === "kolegij") setKolegij(value);
	};

	// Funkcija za primjenu filtera
	const applyCurrentFilters = () => {
		applyFilters({ fakultet, smijer, godina, kolegij });
	};

	// Funkcija za resetiranje filtera
	const resetFilters = () => {
		setFakultet("");
		setSmijer("");
		setGodina("");
		setKolegij("");
		applyFilters({ fakultet: "", smijer: "", godina: "", kolegij: "" });
	};

	return (
		<Form>
			<Row xs={1} sm={2} md={2} lg={4}>
				<Col>
					<Form.Select className="mb-2" aria-label="Odabir fakulteta" name="fakultet" value={fakultet} onChange={handleFilterChange}>
						{/* style={{ background: "#b7dfc5" }} promijeniti kasnije */}
						<option value="">Svi fakulteti</option>
						<option value="FESB">FESB</option>
						<option value="PMF">PMF</option>
					</Form.Select>
				</Col>
				<Col>
					<Form.Select className="mb-2" aria-label="Odabir smijera" name="smijer" value={smijer} onChange={handleFilterChange}>
						<option value="">Svi smjerovi</option>
						<option value="Računarstvo">Računarstvo</option>
						<option value="Elektro">Elektro</option>
					</Form.Select>
				</Col>
				<Col>
					<Form.Select className="mb-2" aria-label="Odabir godine" name="godina" value={godina} onChange={handleFilterChange}>
						<option value="">Sve godine</option>
						<option value="1.">1.</option>
						<option value="2.">2.</option>
						<option value="3.">3.</option>
					</Form.Select>
				</Col>
				<Col>
					<Form.Select className="mb-3" aria-label="Odabir kolegija" name="kolegij" value={kolegij} onChange={handleFilterChange}>
						<option value="">Svi kolegiji</option>
						<option value="Programiranje">Programiranje</option>
						<option value="Programiranje 2">Programiranje 2</option>
						<option value="Programsko Inženjerstvo">Programsko Inženjerstvo</option>
					</Form.Select>
				</Col>
			</Row>
			<Row>
				<Col className="d-flex justify-content-end">
					<Button type="button" onClick={applyCurrentFilters}>
						Primjeni filtere
					</Button>
				</Col>
				<Col>
					<Button type="button" onClick={resetFilters}>
						Očisti filtere
					</Button>
				</Col>
			</Row>
		</Form>
	);
}

export default FilterForm;
