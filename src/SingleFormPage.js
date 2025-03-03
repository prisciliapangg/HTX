import "@govtechsg/sgds/css/sgds.css";
import "@govtechsg/sgds-web-component";
import "@govtechsg/sgds-web-component/components/Masthead";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import htxLogo from "./assets/htx_logo.jpeg";
import { db } from "./firebase"; // Ensure firebase is correctly initialized
import { collection, addDoc } from "firebase/firestore";

export default function SingleFormPage() {
	const [active, setActive] = useState("form1");
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
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		gender: "",
		diet: "",
		dob: "",
		others: "",
		agreement: false, // Checkbox for terms & conditions
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Check for empty required fields
		if (
			!formData.firstName ||
			!formData.lastName ||
			!formData.email ||
			!formData.gender ||
			!formData.diet ||
			!formData.dob ||
			!formData.agreement
		) {
			alert("Please fill in all required fields and agree to the terms.");
			return;
		}

		try {
			await addDoc(collection(db, "forms"), formData);
			alert("Form submitted successfully!");
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				gender: "",
				diet: "",
				dob: "",
				others: "",
				agreement: false,
			});
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("Error submitting form. Please try again.");
		}
	};

	return (
		<div>
			<sgds-masthead fluid></sgds-masthead>
			{/* <Navbar
				expand="sm"
				style={{ backgroundColor: "#5B2C86", color: "white" }}
			>
				<Navbar.Brand>
					<img
						src={htxLogo}
						alt="HTX Logo"
						style={{ width: "70px", height: "auto", paddingLeft: "20px" }}
					/>
					<span
						style={{
							color: "white",
							fontSize: "22px",
							fontWeight: "bold",
							marginLeft: "20px",
						}}
					>
						HTX
					</span>
				</Navbar.Brand>
			</Navbar> */}
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
						<h1>Sign-up</h1>
						<p className="text-muted">
							Already a member?{" "}
							<a href="#" style={{ textDecoration: "none" }}>
								Log in
							</a>
						</p>
					</sgds-content-header-top>

					<sgds-content-body>
						<section className="shadow rounded p-5">
							<form onSubmit={handleSubmit}>
								<div class="col-sm-8">
									<div class="row">
										<div className="mb-3 col-md-6-col-12">
											<label className="form-label">First Name</label>
											<input
												type="text"
												name="firstName"
												className="form-control"
												value={formData.firstName}
												onChange={handleChange}
											/>
										</div>
										<div className="mb-3">
											<label className="form-label">Last Name</label>
											<input
												type="text"
												name="lastName"
												className="form-control"
												value={formData.lastName}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className="mb-3">
										<label className="form-label">Email Address</label>
										<input
											type="email"
											name="email"
											className="form-control"
											value={formData.email}
											onChange={handleChange}
										/>
									</div>
									<div className="mb-3">
										<label className="form-label">Gender</label>
										<select
											name="gender"
											className="form-select"
											value={formData.gender}
											onChange={handleChange}
										>
											<option value="">Select...</option>
											<option value="Male">Male</option>
											<option value="Female">Female</option>
										</select>
									</div>
									<div className="mb-3">
										<label className="form-label">Dietary Restrictions</label>
										<select
											name="diet"
											className="form-select"
											value={formData.diet}
											onChange={handleChange}
										>
											<option value="">Select...</option>
											<option value="Vegetarian">Vegetarian</option>
											<option value="Halal">Halal</option>
											<option value="NIL">NIL</option>
										</select>
									</div>
									<div className="mb-3">
										<label className="form-label">Date of Birth</label>
										<input
											type="date"
											name="dob"
											className="form-control"
											value={formData.dob}
											onChange={handleChange}
										/>
									</div>
									<div className="mb-3">
										<label className="form-label">Other comments:</label>
										<textarea
											name="others"
											rows="3"
											className="form-control"
											value={formData.others}
											onChange={handleChange}
										/>
									</div>
									<div className="mb-3">
										<input
											type="checkbox"
											name="agreement"
											className="form-check-input"
											checked={formData.agreement}
											onChange={handleChange}
											style={{ marginRight: "1%" }}
										/>
										<label className="form-check-label">
											{" "}
											I agree to the terms of the Subscriber Agreement and
											Privacy Policy
										</label>
									</div>
									<div className="d-flex justify-content-end">
										<button
											type="submit"
											className="btn btn-secondary"
											style={{ backgroundColor: "#5B2C86" }}
										>
											Submit
										</button>
									</div>
								</div>
							</form>
						</section>
					</sgds-content-body>
				</sgds-content-area>
			</sgds-template-grid>
		</div>
	);
}
