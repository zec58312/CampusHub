import React from "react";
import { Col, Card, Image, ListGroup, Button } from "react-bootstrap";

function DocumentCard(props) {
	return (
		<Col className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 ">
			<div className="col row">
				<div className="col-lg-3 col-md-4 col-sm-4 col-6 mb-3 p-1">
					<Card className="" style={{ minWidth: "10rem" }}>
						<Image className="card-img-top" src="./src/assets/2538100.jpg" />
						<Card.Body className="p-0">
							<Card.Header className="card-title d-flex align-items-center justify-content-center" style={{ minHeight: "4.2rem" }}>
								<div className="w-100">{props.name}</div>
							</Card.Header>
						</Card.Body>
					</Card>
				</div>
			</div>
		</Col>
	);
}

export default DocumentCard;
