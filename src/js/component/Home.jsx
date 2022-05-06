import React from "react";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<Jumbotron />
			<Card />
		</div>
	);
};

export default Home;
