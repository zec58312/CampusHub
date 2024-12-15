import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

function FilterForm() {
	return (
		<>
			<Form>
				<Row>
					<Col>
						<Form.Select className="mb-2" aria-label="Odabir fakulteta iz padajuceg izbornika" name="fakultet">
							<option value="" selected>
								Svi fakulteti
							</option>
							<option>FESB</option>
							<option>PMF</option>
						</Form.Select>
					</Col>
					<Col>
						<Form.Select className="mb-2" aria-label="Odabir smijera iz padajuceg izbornika" name="smijer">
							<option value="" selected>
								Svi smjerovi
							</option>
							<option>Računarstvo</option>
							<option>Elektro</option>
						</Form.Select>
					</Col>
					<Col>
						<Form.Select className="mb-2" aria-label="Odabir godine iz padajuceg izbornika" name="godina">
							<option value="" selected>
								Sve godine
							</option>
							<option>1.</option>
							<option>2.</option>
							<option>3.</option>
						</Form.Select>
					</Col>
					<Col>
						<Form.Select className="mb-3" aria-label="Odabir kolegija iz padajuceg izbornika" name="kolegij">
							<option value="" selected>
								Svi kolegiji
							</option>
							<option>Programiranje</option>
							<option>Programiranje 2</option>
							<option>Programsko Inženjerstvo</option>
						</Form.Select>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex justify-content-end">
						<Button type="submit">Primjeni filtere</Button>
					</Col>
					<Col>
						<Button>Očisti filtere</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
}

export default FilterForm;
