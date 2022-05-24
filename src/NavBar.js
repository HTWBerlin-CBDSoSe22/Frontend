import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Login from "./Login";
import PageComponents from "./PageComponents";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import Welcome from "./Welcome";
import Products from "./Products";
import SwitchCurrency from "./SwitchCurrency";
// import React from "@types/react";
import React from "react";
import {Dropdown} from "react-bootstrap";

function NavBar(){
    return(
        <div>
            <div>
                <Navbar bg="light" expand="lg">
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
                    <Route path='/products' element={<Products/>} />
                    <Route path='/switchCurrency' element={<SwitchCurrency/>} />
                    <Route path='*' element={<NoMatch/>} />
                </Routes>
            </Router>

        </div>
    );
}

export default NavBar;
