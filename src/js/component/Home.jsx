import React from "react";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Jumbotron />
			<Card />

			<footer className="bg-light text-center text-lg-start">
				<div className="text-center p-3">
					© 2020 Copyright:
					<a className="text-dark" href="https://mdbootstrap.com/">
						MDBootstrap.com
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Home;
