import React from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className="container my-4">
				<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;