import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

//dizajn kopiran s https://mdbootstrap.com/docs/standard/navigation/footer/

//col-xl-6 col-lg-12

function Footer() {
	return (
		<>
			<Container fluid className="bg-dark-subtle position-relative w-100 h-auto p-4 text-center" style={{ bottom: 0 }}>
				<Row>
					<Col className="col-xl-6 col-lg-12 ">
						<h5 className="text-uppercase">Naš cilj</h5>

						<p>Olakšati studentski život.</p>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea voluptatem veniam, est atque cumque eum delectus sint!</p>
					</Col>

					<Col className="col-xl-6 col-lg-12 ">
						<Row>
							<h5 className="text-uppercase mb-0">Upoznaj dev tim</h5>
						</Row>

						<Row className="list-unstyled d-flex">
							<a href="#!" className="text-body">
								Lana Danolić
							</a>

							<a href="#!" className="text-body">
								Duje Masnov
							</a>

							<a href="#!" className="text-body">
								Maja Nakić
							</a>

							<a href="#!" className="text-body">
								Igor Rako
							</a>

							<a href="#!" className="text-body">
								Marina Skorić
							</a>

							<a href="#!" className="text-body">
								Željka Vuković
							</a>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default Footer;
