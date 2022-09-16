import React from 'react';
import Button from "react-bootstrap/Button";

function CustomButton(props) {
    return (
            <Button onClick={props.buttonClick} variant="outline-success" style={props.style}>{props.buttonName}</Button>
    );
}

export default CustomButton;
