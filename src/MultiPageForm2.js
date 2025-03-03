import "@govtechsg/sgds/css/sgds.css";
import "@govtechsg/sgds-web-component";
import "@govtechsg/sgds-web-component/components/Masthead";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import htxLogo from "./assets/htx_logo.jpeg";

export default function MultiPageForm2() {
	const navigate = useNavigate();

	const purpleStyle = {
		backgroundColor: "#5B2C86",
		border: "none",
		color: "white",
	};

	const topNavBarStyle = {
		color: "white",
	};

	const logoTextStyle = {
		color: "white",
		fontSize: "22px",
		fontWeight: "bold",
		marginLeft: "20px", // Space between the logo and text
	};

	const [active, setActive] = useState("form2.2");

	return (
		<div>
			<sgds-masthead fluid></sgds-masthead>
			<Navbar className="mt-0" expand="sm" style={purpleStyle}>
				<Navbar.Brand>
					<img
						src={htxLogo}
						alt="HTX Logo"
						style={{ width: "70px", height: "auto", paddingLeft: "20px" }}
					/>
					<span style={logoTextStyle}>HTX</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="landingNav" />
				<Navbar.Collapse id="landingNav">
					<Nav className="me-auto" navbarScroll activeKey={active}>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/"
								eventKey="home"
								onClick={() => setActive("home")}
								style={topNavBarStyle}
							>
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/details"
								eventKey="details"
								onClick={() => setActive("details")}
								style={topNavBarStyle}
							>
								Details
							</Nav.Link>
						</Nav.Item>
						<NavDropdown
							title={<span style={topNavBarStyle}>Forms</span>}
							id="item-2"
							eventKey="item2"
							onClick={() => setActive("forms")}
						>
							<NavDropdown.Item as={Link} to="/form1">
								Single Page Form
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/form2">
								Multi Page Form
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/form3">
								Collapsible Page Form
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/sidebar"
								eventKey="sidebar"
								onClick={() => setActive("sidebar")}
								style={topNavBarStyle}
							>
								Details 2
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<sgds-template-grid>
				<sgds-content-area>
					<sgds-breadcrumb-area>
						<nav className="sgds" aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="/">HOME</a>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									SIGN-UP
								</li>
							</ol>
						</nav>
					</sgds-breadcrumb-area>
					<sgds-content-header-top>
						<h1>Sign-up</h1>
						<div>
							<Link to="/" className="me-4">
								Cancel
							</Link>

							<button type="button" className="me-4 btn btn-outline-dark sgds">
								Save as draft
							</button>
						</div>
					</sgds-content-header-top>

					<div className="sgds stepper">
						{[1, 2, 3, 4, 5].map((step) => (
							<div
								key={step}
								className={`stepper-item ${step === 2 ? "is-active" : ""}`}
							>
								<div className="stepper-marker">{step}</div>
								<div className="stepper-detail">
									<p>
										<b>Marker title</b>
									</p>
								</div>
							</div>
						))}
					</div>

					<section className="shadow rounded p-5 bg-white">
						<form>
							<div className="col-sm-8">
								<div className="row">
									<div className="mb-3 col-md-6 col-12">
										<label
											className="form-label"
											htmlFor="formSinglePageInput1"
										>
											Label
										</label>
										<input
											placeholder="Text goes here"
											type="text"
											id="formSinglePageInput1"
											className="form-control"
										/>
									</div>
									<div className="mb-3 col-md-6 col-12">
										<label
											className="form-label"
											htmlFor="formSinglePageInput2"
										>
											Label
										</label>
										<input
											placeholder="Text goes here"
											type="text"
											id="formSinglePageInput2"
											className="form-control"
										/>
									</div>
								</div>

								<div className="mb-3">
									<label className="form-label" htmlFor="formSinglePageInput4">
										Label
									</label>
									<input
										placeholder="Text goes here"
										type="text"
										id="formSinglePageInput4"
										className="form-control"
									/>
								</div>
								<div className="mb-3">
									<label className="form-label" htmlFor="formSinglePageSelect1">
										Label
									</label>
									<select className="form-select" id="formSinglePageSelect1">
										<option>Text goes here</option>
										<option>Text goes here</option>
										<option>Text goes here</option>
									</select>
								</div>
							</div>
						</form>
					</section>
					<div className="d-flex justify-content-between align-items-center mt-3">
						<button
							type="button"
							className="btn btn-outline-secondary px-4 py-2 rounded-lg fw-bold"
							style={{ borderColor: "black", color: "black" }}
							onClick={() => {
								console.log("Before:", active);
								setActive("form2");
								navigate("/form2");
								console.log("After:", active);
							}}
						>
							← Previous
						</button>

						<button
							type="button"
							className="btn btn-primary px-5 py-2 rounded-lg fw-bold"
							style={{ backgroundColor: "#5B2C86", borderColor: "#5B2C86" }}
						>
							Next →
						</button>
					</div>
				</sgds-content-area>
			</sgds-template-grid>
			<footer class="sgds footer">
				<section class="footer-top" style={purpleStyle}>
					<div class="container-fluid">
						<div class="row footer-header">
							<div class="col col-lg-6">
								<div class="title">HTX</div>
								<div class="description">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Earum illo delectus laborum libero id ratione quibusdam
									tempora assumenda quas, pariatur cum minus, aliquid molestiae
									et nisi dolorem vitae molestias! Voluptate commodi aliquid
									iusto sequi sit eligendi, quod numquam nihil consectetur eaque
									error earum laudantium! Temporibus accusamus pariatur quod
									totam quia.
								</div>
							</div>
						</div>
						<div class="row footer-items">
							<div class="col-lg-3">
								<div class="title">Column 1</div>
								<ul class="links">
									<li>
										<a href="">About Us</a>
									</li>
									<li>
										<a href="">This is a super long link</a>
									</li>
									<li>
										<a href="">Test</a>
									</li>
									<li>
										<a href="">Test</a>
									</li>
								</ul>
							</div>
							<div class="col-lg-3">
								<div class="title">Category 1</div>
								<ul class="links">
									<li>
										<a href="">About Us</a>
									</li>
									<li>
										<a href="">This is a super long link</a>
									</li>
									<li>
										<a href="">Test</a>
									</li>
									<li>
										<a href="">Test</a>
									</li>
								</ul>
							</div>
							<div class="col-lg-3">
								<div class="title">Category 1</div>
								<ul class="links">
									<li>
										<a href="">About Us</a>
									</li>
									<li>
										<a href="">This is a super long link</a>
									</li>
									<li>
										<a href="">Test</a>
									</li>
									<li>
										<a href="">Test</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="row footer-contact-links">
							<div class="col">
								<div class="d-flex justify-content-lg-end">
									<ul>
										<li>
											<a href="">Contact</a>
										</li>
										<li>
											<a href="">Feedback</a>
										</li>
										<li>
											<a
												href="https://www.htx.gov.sg/"
												target="_blank"
												rel="noopener noreferrer"
											>
												htx.gov.sg
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="footer-bottom" style={purpleStyle}>
					<div class="container-fluid">
						<div class="row footer-mandatory-links">
							<div class="col">
								<ul>
									<li>
										<a
											href="https://tech.gov.sg/report_vulnerability"
											target="_blank"
											rel="noopener noreferrer"
										>
											Report Vulnerability
										</a>
									</li>
									<li>
										<a href="">Privacy</a>
									</li>
									<li>
										<a href="">Terms of use</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="row footer-copyrights">
							<div class="col">
								<div class="d-flex justify-content-lg-end">
									© 2025 Home Team Science and Technology Agency. Last Updated
									08 Feb 2025
								</div>
							</div>
						</div>
					</div>
				</section>
			</footer>
		</div>
	);
}
