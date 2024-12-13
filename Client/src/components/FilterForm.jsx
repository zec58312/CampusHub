import React from "react";
import { Button, Form } from "react-bootstrap";

function FilterForm() {
	return (
		<>
			<Form>
				<Form.Select className="mb-2" aria-label="Odabir fakulteta iz padajuceg izbornika" name="faultet">
					<option value="" selected>
						Svi
					</option>
					<option value="" selected>
						FESB
					</option>
					<option value="" selected>
						PMF
					</option>
				</Form.Select>
				<Form.Select className="mb-2" aria-label="Odabir smijera iz padajuceg izbornika" name="smijer">
					<option value="" selected>
						Svi
					</option>
					<option value="" selected>
						Računarstvo
					</option>
					<option value="" selected>
						Elektro
					</option>
				</Form.Select>
				<Form.Select className="mb-2" aria-label="Odabir godine iz padajuceg izbornika" name="godina">
					<option value="" selected>
						Sve
					</option>
					<option value="" selected>
						1.
					</option>
					<option value="" selected>
						2.
					</option>
					<option value="" selected>
						3.
					</option>
				</Form.Select>
				<Form.Select className="mb-3" aria-label="Odabir kolegija iz padajuceg izbornika" name="kolegij">
					<option value="" selected>
						Svi
					</option>
					<option value="" selected>
						Programiranje
					</option>
					<option value="" selected>
						Programiranje 2
					</option>
					<option value="" selected>
						Programsko Inženjerstvo
					</option>
				</Form.Select>

				<Button className="mb-2" type="submit">
					Primjeni filtere
				</Button>
				<Button className="mx-2 mb-2">Očisti filtere</Button>
			</Form>
		</>
	);
}

export default FilterForm;
