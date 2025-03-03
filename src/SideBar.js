import "@govtechsg/sgds/css/sgds.css";
import "@govtechsg/sgds-web-component";
import "@govtechsg/sgds-web-component/components/Masthead";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import htxLogo from "./assets/htx_logo.jpeg";

export default function SideBar() {
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

	const [active, setActive] = useState("sidebar");

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
			<sgds-template-grid class="with-sidenav">
				<sgds-aside-area>
					<nav class="sidenav sgds list-unstyled open2">
						<li class="sidenav-item">
							<button
								class="sgds btn collapsed active"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseExampleD"
								aria-expanded="false"
								aria-controls="collapseExampleD"
							>
								Sub menu
								<i class="bi bi-chevron-down"></i>
							</button>
							<div
								class="collapse show"
								id="collapseExampleD"
								data-bs-parent=".open2"
							>
								<ul class="list-unstyled">
									<li>
										<a href="#" class="nav-link">
											Sub menu item
										</a>
									</li>
									<li>
										<a href="#" class="nav-link active">
											Sub menu item
										</a>
									</li>
									<li>
										<a href="#" class="nav-link">
											Sub menu item
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li class="sidenav-item">
							<button
								class="sgds btn collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseExampleE"
								aria-expanded="false"
								aria-controls="collapseExampleE"
							>
								Sub menu
								<i class="bi bi-chevron-down"></i>
							</button>
							<div
								class="collapse"
								id="collapseExampleE"
								data-bs-parent=".open2"
							>
								<ul class="list-unstyled">
									<li>
										<a href="#" class="nav-link">
											Sub menu item
										</a>
									</li>
									<li>
										<a href="#" class="nav-link">
											Sub menu item
										</a>
									</li>
									<li>
										<a href="#" class="nav-link">
											Sub menu item
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li class="sidenav-item">
							<button
								class="sgds btn collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseExampleF"
								aria-expanded="false"
								aria-controls="collapseExampleF"
							>
								Sub menu
								<i class="bi bi-chevron-down"></i>
							</button>
							<div
								class="collapse"
								id="collapseExampleF"
								data-bs-parent=".open2"
							>
								<ul class="list-unstyled">
									<li>
										<a href="#" class="nav-link">
											Sub menu item
										</a>
									</li>
									<li>
										<a href="#" class="nav-link">
											Sub menu item
										</a>
									</li>
									<li>
										<a href="#" class="nav-link">
											Sub menu item
										</a>
									</li>
								</ul>
							</div>
						</li>
					</nav>
				</sgds-aside-area>
				<sgds-content-area>
					<nav class="sgds" aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="#">Home</a>
							</li>
							<li class="breadcrumb-item">
								<a href="#">Library</a>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Data
							</li>
						</ol>
					</nav>
					<sgds-content-header-top>
						<h2>Page heading</h2>
					</sgds-content-header-top>
					<sgds-content-body>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<h4>Overview</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</p>
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
