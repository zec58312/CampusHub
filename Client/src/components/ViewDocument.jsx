import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { Container, Button, Row, Col } from "react-bootstrap";

function ViewDocument() {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [fileUrl, setFileUrl] = useState(null);

	const location = useLocation();

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const fileUrl = queryParams.get("file");
		setFileUrl(fileUrl);
	}, [location]);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	const goToPrevPage = () => {
		if (pageNumber > 1) setPageNumber(pageNumber - 1);
	};

	const goToNextPage = () => {
		if (pageNumber < numPages) setPageNumber(pageNumber + 1);
	};

	return (
		<Container className="my-5">
			<Row className="text-center mb-4">
				<Col>
					<h5>Pregled dokumenta</h5>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={8}>
					{fileUrl ? (
						<Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center">
							<Page pageNumber={pageNumber} width={600} />
						</Document>
					) : (
						<p>Učitavanje dokumenta...</p>
					)}
					<Row className="text-center mt-3">
						<Col>
							<p>
								Stranica {pageNumber} od {numPages}
							</p>
						</Col>
					</Row>
					<Row className="justify-content-between">
						<Col className="text-start">
							<Button variant="primary" onClick={goToPrevPage} disabled={pageNumber === 1}>
								Prethodna
							</Button>
						</Col>
						<Col className="text-end">
							<Button variant="primary" onClick={goToNextPage} disabled={pageNumber === numPages}>
								Sljedeća
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default ViewDocument;
