import React from "react";
// import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import fruits_banner from './assets/fruits_banner.jpeg';

const Styles = styled.div`
    .jumbo {
    background: url(${fruits_banner}) no-repeat fiexed bottom;
    background.size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
    }
`;

function PageComponentsBanner() {
    return (
        <div>
            {/*<Styles>*/}
            {/*    <Jumbo fluid classname="jumbo"></Jumbo>*/}
            {/*    <div classname="overlay"></div>*/}
            {/*    <Container>*/}
            {/*        <h1>Components</h1>*/}
            {/*        <p>All Components available.</p>*/}
            {/*    </Container>*/}

            {/*</Styles>*/}
            <h1>LOL</h1>
        </div>

    );
}

export default PageComponentsBanner;
