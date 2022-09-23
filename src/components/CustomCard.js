import React from 'react';
import {Card} from "react-bootstrap";

function CustomCard(props) {
    return (
        <div>
            <Card style={{
                width: '33rem',
                textAlign: "center",
                // letterSpacing: "10px",
                borderRadius: "15px",
                border: "solid 3px #324E01"
            }}>
                {props.content}
            </Card>
        </div>
    );
}

export default CustomCard;
