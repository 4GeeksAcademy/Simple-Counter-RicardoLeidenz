import React from "react";
import Digit from "./Digit.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = ({time}) => {
	const timeString = time.toString()
	const numbers = [...timeString];
	return (
		<div className="row justify-content-center">
            <div className="col-8 justify-content-center bg-dark rounded d-flex">
				<div className="col-1 bg-secondary rounded text-center fs-1 text-white m-1">
                	<FontAwesomeIcon icon={faClock}/>
            	</div>
				{numbers.map((num) => {
						return(<Digit number={num}/>)
					}
				)}
			</div>
		</div>
	);
};

export default SecondsCounter;