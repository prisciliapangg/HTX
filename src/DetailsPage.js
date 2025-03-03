// import "@govtechsg/sgds/css/sgds.css";
// import "@govtechsg/sgds-web-component";
// import "@govtechsg/sgds-web-component/components/Masthead";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import React, { useState } from "react";
// import htxLogo from "./assets/htx_logo.jpeg";

// export default function DetailsPage() {
// 	const purpleStyle = {
// 		backgroundColor: "#5B2C86",
// 		border: "none",
// 		color: "white",
// 	};

// 	const topNavBarStyle = {
// 		color: "white",
// 	};

// 	const logoTextStyle = {
// 		color: "white",
// 		fontSize: "22px",
// 		fontWeight: "bold",
// 		marginLeft: "20px", // Space between the logo and text
// 	};

// 	const [active, setActive] = useState("details");

// 	return (
// 		<div>
// 			<sgds-masthead></sgds-masthead>
// 			<Navbar className="mt-0" expand="sm" style={purpleStyle}>
// 				<Navbar.Brand>
// 					<img
// 						src={htxLogo}
// 						alt="HTX Logo"
// 						style={{ width: "70px", height: "auto", paddingLeft: "20px" }}
// 					/>
// 					<span style={logoTextStyle}>HTX</span>
// 				</Navbar.Brand>
// 				<Navbar.Toggle aria-controls="landingNav" />
// 				<Navbar.Collapse id="landingNav">
// 					<Nav className="me-auto" navbarScroll activeKey={active}>
// 						<Nav.Item>
// 							<Nav.Link
// 								as={Link}
// 								to="/"
// 								eventKey="home"
// 								onClick={() => setActive("home")}
// 								style={topNavBarStyle}
// 							>
// 								Home
// 							</Nav.Link>
// 						</Nav.Item>
// 						<Nav.Item>
// 							<Nav.Link
// 								as={Link}
// 								to="/details"
// 								eventKey="details"
// 								onClick={() => setActive("details")}
// 								style={topNavBarStyle}
// 							>
// 								Details
// 							</Nav.Link>
// 						</Nav.Item>
// 						<NavDropdown
// 							title={<span style={topNavBarStyle}>Forms</span>}
// 							id="item-2"
// 							eventKey="item2"
// 							onClick={() => setActive("forms")}
// 						>
// 							<NavDropdown.Item as={Link} to="/form1">
// 								Single Page Form
// 							</NavDropdown.Item>
// 							<NavDropdown.Item as={Link} to="/form2">
// 								Multi Page Form
// 							</NavDropdown.Item>
// 							<NavDropdown.Item as={Link} to="/form3">
// 								Collapsible Page Form
// 							</NavDropdown.Item>
// 						</NavDropdown>
// 						<Nav.Item>
// 							<Nav.Link
// 								as={Link}
// 								to="/sidebar"
// 								eventKey="sidebar"
// 								onClick={() => setActive("sidebar")}
// 								style={topNavBarStyle}
// 							>
// 								Details 2
// 							</Nav.Link>
// 						</Nav.Item>
// 					</Nav>
// 				</Navbar.Collapse>
// 			</Navbar>
// 			<sgds-content-header-top
// 				style={{ marginTop: "1%", marginLeft: "1%", marginRight: "1%" }}
// 			>
// 				<h2>Page heading</h2>
// 			</sgds-content-header-top>
// 			<sgds-content-body style={{ marginLeft: "1%", marginRight: "1%" }}>
// 				<div>
// 					<p>
// 						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 						eiusmod tempor incididunt ut labore et dolore magna aliqua.
// 					</p>
// 					<h4>Section heading</h4>
// 					<p>
// 						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
// 						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
// 						aliquip ex ea commodo consequat. Duis aute irure dolor in
// 						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
// 						pariatur.
// 					</p>
// 				</div>
// 			</sgds-content-body>
// 			<footer class="sgds footer">
// 				<section class="footer-top" style={purpleStyle}>
// 					<div class="container-fluid">
// 						<div class="row footer-header">
// 							<div class="col col-lg-6">
// 								<div class="title">HTX</div>
// 								<div class="description">
// 									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
// 									Earum illo delectus laborum libero id ratione quibusdam
// 									tempora assumenda quas, pariatur cum minus, aliquid molestiae
// 									et nisi dolorem vitae molestias! Voluptate commodi aliquid
// 									iusto sequi sit eligendi, quod numquam nihil consectetur eaque
// 									error earum laudantium! Temporibus accusamus pariatur quod
// 									totam quia.
// 								</div>
// 							</div>
// 						</div>
// 						<div class="row footer-items">
// 							<div class="col-lg-3">
// 								<div class="title">Column 1</div>
// 								<ul class="links">
// 									<li>
// 										<a href="">About Us</a>
// 									</li>
// 									<li>
// 										<a href="">This is a super long link</a>
// 									</li>
// 									<li>
// 										<a href="">Test</a>
// 									</li>
// 									<li>
// 										<a href="">Test</a>
// 									</li>
// 								</ul>
// 							</div>
// 							<div class="col-lg-3">
// 								<div class="title">Category 1</div>
// 								<ul class="links">
// 									<li>
// 										<a href="">About Us</a>
// 									</li>
// 									<li>
// 										<a href="">This is a super long link</a>
// 									</li>
// 									<li>
// 										<a href="">Test</a>
// 									</li>
// 									<li>
// 										<a href="">Test</a>
// 									</li>
// 								</ul>
// 							</div>
// 							<div class="col-lg-3">
// 								<div class="title">Category 1</div>
// 								<ul class="links">
// 									<li>
// 										<a href="">About Us</a>
// 									</li>
// 									<li>
// 										<a href="">This is a super long link</a>
// 									</li>
// 									<li>
// 										<a href="">Test</a>
// 									</li>
// 									<li>
// 										<a href="">Test</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 						<div class="row footer-contact-links">
// 							<div class="col">
// 								<div class="d-flex justify-content-lg-end">
// 									<ul>
// 										<li>
// 											<a href="">Contact</a>
// 										</li>
// 										<li>
// 											<a href="">Feedback</a>
// 										</li>
// 										<li>
// 											<a
// 												href="https://www.htx.gov.sg/"
// 												target="_blank"
// 												rel="noopener noreferrer"
// 											>
// 												htx.gov.sg
// 											</a>
// 										</li>
// 									</ul>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 				<section class="footer-bottom" style={purpleStyle}>
// 					<div class="container-fluid">
// 						<div class="row footer-mandatory-links">
// 							<div class="col">
// 								<ul>
// 									<li>
// 										<a
// 											href="https://tech.gov.sg/report_vulnerability"
// 											target="_blank"
// 											rel="noopener noreferrer"
// 										>
// 											Report Vulnerability
// 										</a>
// 									</li>
// 									<li>
// 										<a href="">Privacy</a>
// 									</li>
// 									<li>
// 										<a href="">Terms of use</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 						<div class="row footer-copyrights">
// 							<div class="col">
// 								<div class="d-flex justify-content-lg-end">
// 									© 2025 Home Team Science and Technology Agency. Last Updated
// 									08 Feb 2025
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 			</footer>
// 		</div>
// 	);
// }

import "@govtechsg/sgds/css/sgds.css";
import "@govtechsg/sgds-web-component";
import "@govtechsg/sgds-web-component/components/Masthead";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import htxLogo from "./assets/htx_logo.jpeg";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function DetailsPage() {
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
		marginLeft: "20px",
	};

	const [active, setActive] = useState("details");
	const [formDataList, setFormDataList] = useState([]);

	// to get the data from the submitted forms
	useEffect(() => {
		const fetchFormData = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "forms"));
				const data = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setFormDataList(data);
			} catch (error) {
				console.error("Error fetching form data:", error);
			}
		};

		fetchFormData();
	}, []);

	return (
		<div>
			<sgds-masthead></sgds-masthead>
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

			<div className="container mt-4">
				<h2>Submitted Forms</h2>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Gender</th>
							<th>Diet</th>
							<th>Date of Birth</th>
							<th>Other Comments</th>
							<th>Agreement</th>
						</tr>
					</thead>
					<tbody>
						{formDataList.map((form) => (
							<tr key={form.id}>
								<td>{form.firstName}</td>
								<td>{form.lastName}</td>
								<td>{form.email}</td>
								<td>{form.gender}</td>
								<td>{form.diet}</td>
								<td>{form.dob}</td>
								<td>{form.others}</td>
								<td>{form.agreement ? "Yes" : "No"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
