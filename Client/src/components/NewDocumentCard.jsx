import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";

// fa-flip, fa-beat... - za animaciju ikona

function NewDocumentCard({ dokumenti }) {
	// 	const handleDownload = () => {
	// 		// useEffect(() => {
	// 		// 	axios.get(`http://localhost:3001/${dokumenti.fileURL}`).then((res) => postaviRezervacije(res.data));
	// 		// }, []);
	// 		window.open({dokumenti.fileURL}, '_self');
	// 	};

	return (
		<Container fluid className="mb-3">
			<Card>
				<Card.Header as="h6">{kolegij}</Card.Header>
				<Card.Body className="px-4">
					<Row className="align-items-end">
						<Col md="3" sm="3">
							{/*primjeniti isto na glasove*/}
							<Card.Title className="mb-0" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", lineHeight: "normal" }}>
								{dokumenti.ime}
							</Card.Title>
						</Col>
						<Col md="2" sm="3" className="text-muted">
							<i>autor: {dokumenti.autor}</i>
						</Col>
						<Col md="2" sm="3" className="text-muted">
							objavljeno: {dokumenti.datum}
						</Col>
					</Row>

					<Row className="my-4">
						<Col>
							<h6 className="m-0 ">Opis:</h6>
							{opis}
						</Col>
					</Row>
					<Row className="align-items-end">
						<Col md="3" sm="3" className="text-muted">
							{dokumenti.postotak}% pozitivnih glasova od {dokumenti.glasovi}
							{/* prepraviti kada dodamo glasove u bazu */}
						</Col>
						<Col className="d-flex text-primary">
							<div className="mx-2">
								<i className=" fa-regular fa-thumbs-down fa-flip-horizontal fa-xl" />
							</div>
							<div>
								<i className="fa-regular fa-thumbs-up fa-xl" style={{ transform: "translateY(-5px)" }} />
							</div>
						</Col>
						<Col className="d-flex flex-row-reverse">
							<a href={"http://localhost:3001/" + dokumenti.fileURL} download>
								{/* mozda nece biti tocan link */}
								<Button variant="primary">
									<i className="fa-regular fa-download" />
									Download
								</Button>
							</a>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default NewDocumentCard;
