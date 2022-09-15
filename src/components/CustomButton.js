import React from 'react';
import Button from "react-bootstrap/Button";

function CustomButton(props) {
    return (
        <div>
            <Button onClick={props.buttonClick} variant="outline-success">{props.buttonName}!!</Button>
        </div>
    );
}

export default CustomButton;
