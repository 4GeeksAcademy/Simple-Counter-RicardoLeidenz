import React from "react";
import Digit from "./Digit.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const formatToDigits = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`.split('');
};

const SecondsCounter = ({time}) => {
	//Transfor the string version of the number into an array of characters
	const numbers = [...formatToDigits(time)];
	return (
		<div className="col-10 justify-content-center bg-dark rounded d-flex p-3 border border-light">
			<div className="col-1 bg-secondary rounded text-center fs-1 text-white m-1 border border-light">
				<FontAwesomeIcon icon={faClock}/>
			</div>
			{/* Create a Digit box per element in the numbers array */}
			{numbers.map((char) => {
					return(<Digit number={char}/>)
				}
			)}
		</div>
	);
};

export default SecondsCounter;