import React, { useState } from "react";
import "@govtechsg/sgds/css/sgds.css";
import "@webcomponents/scoped-custom-element-registry";
import "@govtechsg/sgds-web-component";
import "@govtechsg/sgds-web-component/components/Masthead";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import DetailsPage from "./DetailsPage";
import SingleFormPage from "./SingleFormPage";
import MultiPageForm from "./MultiPageForm";
import CollapsiblePageForm from "./CollapsiblePageForm";
import SideBar from "./SideBar";
import MultiPageForm2 from "./MultiPageForm2";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/details" element={<DetailsPage />} />
				<Route path="/form1" element={<SingleFormPage />} />
				<Route path="/form2" element={<MultiPageForm />} />
				<Route path="/form3" element={<CollapsiblePageForm />} />
				<Route path="/sidebar" element={<SideBar />} />
				<Route path="/form2.2" element={<MultiPageForm2 />} />
			</Routes>
		</Router>
	);
}

export default App;
