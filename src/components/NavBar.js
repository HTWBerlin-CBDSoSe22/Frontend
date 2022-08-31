import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import PageComponents from "../pages/PageComponents";
import NoMatch from "../pages/NoMatch";
import Welcome from "../pages/Welcome";
import PageProducts from "../pages/PageProducts";
// import React from "@types/react";
import React from "react";
import {Dropdown} from "react-bootstrap";

function NavBar(){
    return(
        <div>
            <div>
                <Navbar bg="light" expand="lg" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="/Welcome">Welcome</Navbar.Brand>

                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/pageComponents">Components</Nav.Link>
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
                    <Route exact path='/welcome' element={<Welcome/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route path='/pageComponents' element={<PageComponents/>} />
                    <Route path='/products' element={<PageProducts/>} />
                    <Route path='*' element={<NoMatch/>} />
                </Routes>
            </Router>

        </div>
    );
}

export default NavBar;
