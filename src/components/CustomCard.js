import React from 'react';
import {Card} from "react-bootstrap";

function CustomCard(props) {
    return (
        <div>
            <Card style={{
                width: '39rem',
                height: '34.5rem',
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

export default CustomCard;
