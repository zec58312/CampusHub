import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

//dizajn kopiran s https://mdbootstrap.com/docs/standard/navigation/footer/

//col-xl-6 col-lg-12

function Footer() {
	return (
		<>
			<Container fluid className=" position-relative w-100 h-auto p-4 text-center text-white" style={{ bottom: 0, backgroundColor: "#0a7d9a" }}>
				<Row>
					<Col sm={12} md={6}>
						<h5 className="text-uppercase">
							<b>Naš cilj</b>
						</h5>

						<p>Olakšati studentski život i dijeliti znanje na jednostavan način.</p>
						<p>Razviti aplikaciju kakvu smo i sami htjeli imati.</p>
						<p></p>
					</Col>

					<Col sm={12} md={6} className="d-flex flex-column align-items-center">
						<Row>
							<h5 className="text-uppercase">
								<b>Upoznaj dev tim&nbsp;</b>
								<i class="fa-brands fa-github" />
							</h5>
						</Row>

						<Row style={{ maxWidth: "20rem" }}>
							<Col className="mx-3">
								<h6 className="mb-0">
									<b>FRONTEND:</b>
								</h6>
								<ul className="list-unstyled">
									<li>
										<a href="https://github.com/mnakicgit" className="text-white">
											Maja&nbsp;Nakić
										</a>
									</li>
									<li>
										<a href="https://github.com/lanadanolic" className="text-white">
											Lana&nbsp;Danolić
										</a>
									</li>
								</ul>
							</Col>
							<Col className="mx-3">
								<h6 className="mb-0">
									<b>BACKEND:</b>
								</h6>
								<ul className="list-unstyled">
									<li>
										<a href="https://github.com/due1337" className="text-white">
											Duje&nbsp;Masnov
										</a>
									</li>

									<li>
										<a href="https://github.com/irako00" className="text-white">
											Igor&nbsp;Rako
										</a>
									</li>
									<li>
										<a href="https://github.com/aniram-ciroks" className="text-white">
											Marina&nbsp;Skorić
										</a>
									</li>
									<li>
										<a href="https://github.com/zec58312" className="text-white">
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
