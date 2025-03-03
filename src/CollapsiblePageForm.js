import "@govtechsg/sgds/css/sgds.css";
import "@govtechsg/sgds-web-component";
import "@govtechsg/sgds-web-component/components/Masthead";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import htxLogo from "./assets/htx_logo.jpeg";

export default function CollapsiblePageForm() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

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

	const [active, setActive] = useState("form3");

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
					<sgds-content-header-top>
						<div>
							<h1>Sign-up</h1>
						</div>
						<div>
							<a href="/" class="me-4">
								Cancel
							</a>
							<button type="button" class="me-4 btn btn-outline-dark sgds">
								Save as draft
							</button>
						</div>
					</sgds-content-header-top>
					<sgds-content-body>
						<div class="shadow sgds accordion" id="accordionExample">
							<div class="accordion-item">
								{/* test start */}
								<div className="shadow sgds accordion" id="accordionExample">
									{[1, 2, 3].map((index) => (
										<div className="accordion-item" key={index}>
											<h2 className="accordion-header" id={`heading${index}`}>
												<button
													className={`accordion-button ${
														activeIndex === index ? "" : "collapsed"
													}`}
													type="button"
													onClick={() => toggleAccordion(index)}
													aria-expanded={activeIndex === index}
													aria-controls={`collapse${index}`}
												>
													Accordion Item #{index}
												</button>
											</h2>
											<div
												id={`collapse${index}`}
												className={`accordion-collapse collapse ${
													activeIndex === index ? "show" : ""
												}`}
												aria-labelledby={`heading${index}`}
												data-bs-parent="#accordionExample"
											>
												<div className="p-5 accordion-body">
													{index === 1 && (
														<div className="col-sm-8">
															<form>
																<div className="row">
																	<div className="mb-3 col-md-6 col-12">
																		<label
																			className="form-label"
																			htmlFor="formCollapsibleInput1"
																		>
																			Label
																		</label>
																		<input
																			placeholder="Text goes here"
																			type="text"
																			id="formCollapsibleInput1"
																			className="form-control"
																		/>
																	</div>
																	<div className="mb-3 col-md-6 col-12">
																		<label
																			className="form-label"
																			htmlFor="formCollapsibleSinglePageInput2"
																		>
																			Label
																		</label>
																		<input
																			placeholder="Text goes here"
																			type="text"
																			id="formCollapsibleSinglePageInput2"
																			className="form-control"
																		/>
																	</div>
																</div>
																<div className="mb-3">
																	<label
																		className="form-label"
																		htmlFor="formCollapsibleInput3"
																	>
																		Label
																	</label>
																	<div className="mb-3 input-group sgds">
																		<input
																			placeholder="Text goes here"
																			aria-label="Dollar amount (with dot and two decimal places)"
																			id="formCollapsibleInput3"
																			className="form-control"
																		/>
																		<span className="input-group-text">
																			@something
																		</span>
																	</div>
																</div>
																<div className="mb-3">
																	<label
																		className="form-label"
																		htmlFor="formCollapsibleInput4"
																	>
																		Label
																	</label>
																	<input
																		placeholder="Text goes here"
																		type="text"
																		id="formCollapsibleInput4"
																		className="form-control"
																	/>
																</div>
															</form>
														</div>
													)}
													{index === 2 && (
														<div className="col-sm-8">
															<form>
																<div className="row">
																	<div className="mb-3 col-md-6 col-12">
																		<label
																			className="form-label"
																			htmlFor="formCollapsibleInput1"
																		>
																			Label
																		</label>
																		<input
																			placeholder="Text goes here"
																			type="text"
																			id="formCollapsibleInput1"
																			className="form-control"
																		/>
																	</div>
																	<div className="mb-3 col-md-6 col-12">
																		<label
																			className="form-label"
																			htmlFor="formCollapsibleSinglePageInput2"
																		>
																			Label
																		</label>
																		<input
																			placeholder="Text goes here"
																			type="text"
																			id="formCollapsibleSinglePageInput2"
																			className="form-control"
																		/>
																	</div>
																</div>
																<div className="mb-3">
																	<label
																		className="form-label"
																		htmlFor="formCollapsibleInput3"
																	>
																		Label
																	</label>
																	<div className="mb-3 input-group sgds">
																		<input
																			placeholder="Text goes here"
																			aria-label="Dollar amount (with dot and two decimal places)"
																			id="formCollapsibleInput3"
																			className="form-control"
																		/>
																		<span className="input-group-text">
																			@something
																		</span>
																	</div>
																</div>
																<div className="mb-3">
																	<label
																		className="form-label"
																		htmlFor="formCollapsibleInput4"
																	>
																		Label
																	</label>
																	<input
																		placeholder="Text goes here"
																		type="text"
																		id="formCollapsibleInput4"
																		className="form-control"
																	/>
																</div>
															</form>
														</div>
													)}
													{index === 3 && (
														<div className="col-sm-8">
															<form>
																<div className="row">
																	<div className="mb-3 col-md-6 col-12">
																		<label
																			className="form-label"
																			htmlFor="formCollapsibleInput1"
																		>
																			Label
																		</label>
																		<input
																			placeholder="Text goes here"
																			type="text"
																			id="formCollapsibleInput1"
																			className="form-control"
																		/>
																	</div>
																	<div className="mb-3 col-md-6 col-12">
																		<label
																			className="form-label"
																			htmlFor="formCollapsibleSinglePageInput2"
																		>
																			Label
																		</label>
																		<input
																			placeholder="Text goes here"
																			type="text"
																			id="formCollapsibleSinglePageInput2"
																			className="form-control"
																		/>
																	</div>
																</div>
																<div className="mb-3">
																	<label
																		className="form-label"
																		htmlFor="formCollapsibleInput3"
																	>
																		Label
																	</label>
																	<div className="mb-3 input-group sgds">
																		<input
																			placeholder="Text goes here"
																			aria-label="Dollar amount (with dot and two decimal places)"
																			id="formCollapsibleInput3"
																			className="form-control"
																		/>
																		<span className="input-group-text">
																			@something
																		</span>
																	</div>
																</div>
																<div className="mb-3">
																	<label
																		className="form-label"
																		htmlFor="formCollapsibleInput4"
																	>
																		Label
																	</label>
																	<input
																		placeholder="Text goes here"
																		type="text"
																		id="formCollapsibleInput4"
																		className="form-control"
																	/>
																</div>
															</form>
														</div>
													)}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div class="d-flex justify-content-end">
							<button
								type="button"
								class="btn btn-secondary sgds"
								style={{ backgroundColor: "#5B2C86" }}
							>
								Submit
							</button>
						</div>
					</sgds-content-body>
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

// import React, { useState } from "react";

// export default function CollapsiblePageForm() {
// 	const [activeIndex, setActiveIndex] = useState(null);

// 	const toggleAccordion = (index) => {
// 		setActiveIndex(activeIndex === index ? null : index);
// 	};

// 	return (
// 		<div className="shadow sgds accordion" id="accordionExample">
// 			{[1, 2, 3].map((index) => (
// 				<div className="accordion-item" key={index}>
// 					<h2 className="accordion-header" id={`heading${index}`}>
// 						<button
// 							className={`accordion-button ${
// 								activeIndex === index ? "" : "collapsed"
// 							}`}
// 							type="button"
// 							onClick={() => toggleAccordion(index)}
// 							aria-expanded={activeIndex === index}
// 							aria-controls={`collapse${index}`}
// 						>
// 							Accordion Item #{index}
// 						</button>
// 					</h2>
// 					<div
// 						id={`collapse${index}`}
// 						className={`accordion-collapse collapse ${
// 							activeIndex === index ? "show" : ""
// 						}`}
// 						aria-labelledby={`heading${index}`}
// 						data-bs-parent="#accordionExample"
// 					>
// 						<div className="p-5 accordion-body">
// 							<p>
// 								This is some placeholder content for accordion item #{index}.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
