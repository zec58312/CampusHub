import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

//dizajn kopiran s https://mdbootstrap.com/docs/standard/navigation/footer/

//col-xl-6 col-lg-12

function Footer() {
	return (
		<>
			<Container fluid className="bg-dark-subtle position-relative w-100 h-auto p-4 text-center" style={{ bottom: 0 }}>
				<Row>
					<Col sm={12} md={6}>
						<h5 className="text-uppercase">Naš cilj</h5>

						<p>Olakšati studentski život i dijeliti znanje na jednostavan način.</p>
						<p>Razviti aplikaciju kakvu smo i sami htjeli imati.</p>
						<p></p>
					</Col>

					<Col sm={12} md={6} className="d-flex flex-column align-items-center">
						<Row>
							<h5 className="text-uppercase">
								Upoznaj dev tim&nbsp;
								<i class="fa-brands fa-github" />
							</h5>
						</Row>

						<Row style={{ maxWidth: "20rem" }}>
							<Col className="mx-3">
								<h6 className="mb-0">FRONTEND:</h6>
								<ul className="list-unstyled">
									<li>
										<a href="https://github.com/mnakicgit" className="text-body">
											Maja&nbsp;Nakić
										</a>
									</li>
									<li>
										<a href="https://github.com/lanadanolic" className="text-body">
											Lana&nbsp;Danolić
										</a>
									</li>
								</ul>
							</Col>
							<Col className="mx-3">
								<h6 className="mb-0">BACKEND:</h6>
								<ul className="list-unstyled">
									<li>
										<a href="https://github.com/due1337" className="text-body">
											Duje&nbsp;Masnov
										</a>
									</li>

									<li>
										<a href="https://github.com/irako00" className="text-body">
											Igor&nbsp;Rako
										</a>
									</li>
									<li>
										<a href="https://github.com/aniram-ciroks" className="text-body">
											Marina&nbsp;Skorić
										</a>
									</li>
									<li>
										<a href="https://github.com/zec58312" className="text-body">
											Željka&nbsp;Vuković
										</a>
									</li>
								</ul>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default Footer;
