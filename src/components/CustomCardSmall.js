import React from 'react';
import {Card} from "react-bootstrap";

function CustomCardSmall(props) {
    return (
        <div>
            <Card style={{
                width: '33rem',
                height: '6rem',
                textAlign: "center",
                letterSpacing: "10px",
                borderRadius: "5px",
                border: "solid"
            }}>
                {props.content}
            </Card>
        </div>
    );
}

export default CustomCardSmall;
