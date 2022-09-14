import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import PageLogin from "../pages/PageLogin";
import PageComponents from "../pages/PageComponents";
import PageNoMatch from "../pages/PageNoMatch";
import PageWelcome from "../pages/PageWelcome";
import PageProducts from "../pages/PageProducts";
// import React from "@types/react";
import React from "react";
import {Dropdown} from "react-bootstrap";

function CustomNavBar(){
    return(
        <div>
            <div>
                <Navbar bg="light" expand="lg" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="/welcome">Welcome</Navbar.Brand>

                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/components">Components</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                                {/*<Nav.Link href="/switchCurrency">Switch Currency</Nav.Link>*/}

                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Choose Currency
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/currencyEuro">Euro</Dropdown.Item>
                                        <Dropdown.Item href="/currencyDollar">Dollar</Dropdown.Item>
                                        <Dropdown.Item href="/currencySwedishCrown">Swedish Crown</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <Router>
                <Routes>
                    <Route exact path='/welcome' element={<PageWelcome/>} />
                    <Route exact path='/login' element={<PageLogin/>} />
                    <Route path='/components' element={<PageComponents/>} />
                    <Route path='/products' element={<PageProducts/>} />
                    <Route path='*' element={<PageNoMatch/>} />
                </Routes>
            </Router>

        </div>
    );
}

export default CustomNavBar;
