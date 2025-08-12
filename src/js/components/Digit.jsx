import React from "react";

//create your first component
const Digit = ({number}) => {
    return (
            <div className="col-1 bg-secondary rounded text-center fs-1 text-white align-middle m-1">
                {number}
            </div>
    );
};

export default Digit;