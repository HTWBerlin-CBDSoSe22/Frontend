import React from 'react';
import {Card} from "react-bootstrap";

function CustomCardSmall(props) {
    return (
        <div>
            <Card style={{
                width: '33rem',
                height: '6rem',
                marginBottom: '-5px',
                textAlign: "center",
                letterSpacing: "10px",
                borderRadius: "25px",
                border: "solid 3px #324E01"
            }}>
                {props.content}
            </Card>
        </div>
    );
}

export default CustomCardSmall;
