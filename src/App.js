import React from "react";
import Card from "./components/Card";
import CardGroup from "./components/CardGroup";

const App = () => (
	<CardGroup>
		<Card
			description="Trial"
			icon="fa-thumbs-o-up"
			price="Free!"
		/>
		<Card
			description="Basic tier"
			hint="most popular"
			icon="fa-trophy"
			price="$10.00"
		/>
		<Card
			description="Advanced tier"
			hint="only for enterprise-level professionals"
			icon="fa-bolt"
			price="$6000.00"
		/>
	</CardGroup>
);

export default App;
