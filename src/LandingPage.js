import React, { useState } from "react";
// import "@govtechsg/sgds/css/sgds.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import htxLogo from "./assets/htx_logo.jpeg";

export default function LandingPage() {
	const userName = "Priscilia";

	const [active, setActive] = useState("home");

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
			{/* <section className="m-8">
				<h4>Place your content here</h4>
			</section> */}

			{/* test start */}
			<div className="container-fluid mt-4">
				<div className="row">
					{/* Left Content Section */}
					<div className="col-md-8">
						<h2>Welcome to HTX</h2>
						<p>Place your main content here.</p>
						{/* Additional content can go here */}
					</div>

					{/* Right Sidebar Section */}
					<div className="col-md-4">
						<div className="card" style={{ marginBottom: "10%" }}>
							{/* <div
								className="card-header"
								style={{
									fontWeight: "bold", // Makes the font weight thicker
									padding: "2rem", // Adds more padding for thickness
									fontSize: "1.2rem", // Increases font size
									backgroundColor: "rgba(91, 44, 134, 0.1)", // Optional: Adjust the background color
								}}
							>
								<bold>Good morning, {userName}!</bold>
							</div> */}
							<div
								className="card-header"
								style={{
									fontWeight: "bold",
									fontSize: "1.5rem",
									backgroundColor: "rgba(91, 44, 134, 0.1)",
									color: "#5B2C86",
									padding: "1.5rem",
									borderBottom: "1px solid rgba(0,0,0,0.1)",
								}}
							>
								Good morning,{" "}
								<span style={{ color: "#3A0CA3" }}>{userName || "User"}!</span>
							</div>
							<div className="card-body">
								<h5>Announcements</h5>
								<ul>
									<li>Announcement 1</li>
									<li>Announcement 2</li>
									<li>Announcement 3</li>
								</ul>
								<hr />
								<h5>Upcoming Events</h5>
								<ul>
									<li>17 Jan 2025: HTX SWC'24</li>
									<li>20 Feb 2025: Tech Conference</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* test end */}

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
