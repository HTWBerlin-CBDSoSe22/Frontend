import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import PageComponents from "../pages/PageComponents";
import PageNoMatch from "../pages/PageNoMatch";
import PageWelcome from "../pages/PageWelcome";
import PageProducts from "../pages/PageProducts";
import {useKeycloak} from "@react-keycloak/web";
import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";

function CustomNavBar() {
    const {keycloak, setKeycloak} = useKeycloak();
    const [currency, setCurrency] = useState('EUR');

    function changeCurrency(currency) {
        setCurrency(currency);
    }

    return (
        <div >
            <Router>
            <div>

                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Container fluid>
                        <Link style={{margin: '0px 6px 0px 6px', fontSize: '1.5em', textDecoration: 'none', color: 'white'}} to="/welcome">Home</Link>

                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                navbarScroll
                            >
                                {keycloak.authenticated && (
                                    <Link className="link-components" to="/components">Components</Link>
                                )}
                                {keycloak.authenticated && (
                                    <Link className="link-products" to="/products">Products</Link>
                                )}

                                <Dropdown style={{margin: "5px"}}>
                                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">{currency}</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => changeCurrency('EUR')}>Euro</Dropdown.Item>
                                        <Dropdown.Item onClick={() => changeCurrency('USD')}>Dollar</Dropdown.Item>
                                        <Dropdown.Item onClick={() => changeCurrency('SEK')}>Swedish Crown</Dropdown.Item>
                                        <Dropdown.Item onClick={() => changeCurrency('GBP')}>Pound</Dropdown.Item>
                                        <Dropdown.Item onClick={() => changeCurrency('CHF')}>Swiss Franc</Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                            </Nav>
                            <Nav>
                                {keycloak.authenticated && (
                                    <Nav.Link variant={"primary"} onClick={() => keycloak.logout()}
                                    >
                                        Logout ({keycloak.tokenParsed.preferred_username})
                                    </Nav.Link>
                                )}
                                {!keycloak.authenticated && (
                                    <Nav.Link variant={"primary"} onClick={() => keycloak.login()}
                                    >
                                        Login
                                    </Nav.Link>
                                )}
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

                <Routes>
                    <Route exact path='/welcome' element={<PageWelcome/>}/>
                    <Route path='/components' element={<PageComponents selectedCurrency={currency}/>}/>
                    <Route path='/products' element={<PageProducts selectedCurrency={currency}/>}/>
                    <Route path='*' element={<PageNoMatch/>}/>
                </Routes>

            </Router>
        </div>
    );
}

export default CustomNavBar;
