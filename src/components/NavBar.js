import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import PageComponents from "../pages/PageComponents";
import NoMatch from "../pages/NoMatch";
import Welcome from "../pages/Welcome";
import PageProducts from "../pages/PageProducts";
import {useKeycloak} from "@react-keycloak/web";
import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";

function NavBar() {
    const {keycloak, initialized} = useKeycloak();
    const [currency, newCurrency] = useState('EUR');

    function changeCurrency(currency) {
        newCurrency(currency);
    }
    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="/Welcome">Welcome</Navbar.Brand>

                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link href="/pageComponents">Components</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                                {/*<Nav.Link href="/switchCurrency">Switch Currency</Nav.Link>*/}

                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {currency}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            onClick={() => changeCurrency('EUR')}
                                        >Euro</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => changeCurrency('USD')}
                                        >Dollar</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => changeCurrency('SEK')}
                                        >Swedish Crown</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {!keycloak.authenticated && (
                                    <Button variant={"primary"}
                                            onClick={() => keycloak.login()}
                                    >Login</Button>
                                )}
                                {keycloak.authenticated && (
                                    <Button
                                        variant={"primary"}
                                        onClick={() => keycloak.logout()}
                                    >
                                        Logout ({keycloak.tokenParsed.preferred_username})
                                    </Button>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <Router>
                <Routes>
                    <Route exact path='/welcome' element={<Welcome/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route path='/pageComponents' element={<PageComponents/>}/>
                    <Route path='/products' element={<PageProducts/>}/>
                    <Route path='*' element={<NoMatch/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default NavBar;
