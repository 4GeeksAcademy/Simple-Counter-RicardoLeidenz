import React from "react";
import SecondsCounter from "./SecondsCounter.jsx"

const Home = ({time}) => {
	return(
		<div>
			<SecondsCounter time={time}/>
		</div>
	)
};

export default Home;