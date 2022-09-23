import React from 'react';
import Button from "react-bootstrap/Button";

function CustomButton(props) {
    return (
            <Button onClick={props.buttonClick}
                    variant="outline-success"
                    ref={props.ref}
                    disabled={props.disabled}
                    style={props.style}
                    style={{width:'40%', marginLeft:'1%'}}
                    type={props.type}>{props.buttonName}</Button>
    );
}

export default CustomButton;
