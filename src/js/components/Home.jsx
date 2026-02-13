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
					<Card texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa est aperiam odio, id ut obcaecati consequuntur maxime molestias." />
					<Card texto= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa est aperiam odio, id ut obcaecati consequuntur maxime molestias nulla expedita rerum eos sapiente in, similique, magnam quis? Cum, repudiandae cumque?"/>
					<Card texto= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa est aperiam odio, id ut obcaecati consequuntur maxime molestias."/>
					<Card texto= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa est aperiam odio, id ut obcaecati consequuntur maxime molestias nulla expedita rerum eos sapiente in, similique, magnam quis? Cum, repudiandae cumque?"/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;