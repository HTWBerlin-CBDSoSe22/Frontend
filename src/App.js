import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import PageComponents from "./PageComponents";
import Login from "./Login.js";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import Container from "react-bootstrap/Container";
import PageComponentsBanner from "./PageComponentsBanner";

function App() {
  return (
    <div>
        <PageComponentsBanner />
        <Container>

        {/*<Login/>*/}
        {/*<TestTable/>*/}


      {/*<h1 className="title">COMPONENTS</h1>*/}

        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/pageComponents">PageComponents</Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link to="/NoMatch">NoMatch</Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route exact path='/login' element={<Login/>} />
                <Route path='/pageComponents' element={<PageComponents/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<NoMatch/>} />

                {/*<Route exact path="/login" component={Login}> />*/}
                {/*<Route path ="/pageComponents" component={PageComponents}>  </Route>*/}
                {/*<Route path ="/contact" component={Contact}>  </Route>*/}
                {/*<Route components={NoMatch}></Route>*/}
            </Routes>
        </Router>

        {/*<div>*/}
        {/*    <Navbar bg="light" expand="lg">*/}
        {/*        <Container fluid>*/}
        {/*            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>*/}
        {/*            <Navbar.Toggle aria-controls="navbarScroll" />*/}
        {/*            <Navbar.Collapse id="navbarScroll">*/}
        {/*                <Nav*/}
        {/*                    className="me-auto my-2 my-lg-0"*/}
        {/*                    style={{ maxHeight: '100px' }}*/}
        {/*                    navbarScroll*/}
        {/*                >*/}
        {/*                    <Nav.Link href="#action1">Home</Nav.Link>*/}
        {/*                    <Nav.Link href="#action2">Link</Nav.Link>*/}
        {/*                    <NavDropdown title="Link" id="navbarScrollingDropdown">*/}
        {/*                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>*/}
        {/*                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>*/}
        {/*                        <NavDropdown.Divider />*/}
        {/*                        <NavDropdown.Item href="#action5">*/}
        {/*                            Something else here*/}
        {/*                        </NavDropdown.Item>*/}
        {/*                    </NavDropdown>*/}
        {/*                    <Nav.Link href="#" disabled>*/}
        {/*                        Link*/}
        {/*                    </Nav.Link>*/}
        {/*                </Nav>*/}
        {/*                <Form className="d-flex">*/}
        {/*                    <FormControl*/}
        {/*                        type="search"*/}
        {/*                        placeholder="Search"*/}
        {/*                        className="me-2"*/}
        {/*                        aria-label="Search"*/}
        {/*                    />*/}
        {/*                    <Button variant="outline-success">Search</Button>*/}
        {/*                </Form>*/}
        {/*            </Navbar.Collapse>*/}
        {/*        </Container>*/}
        {/*    </Navbar>*/}
        {/*</div>*/}

        {/*<PageComponents/>*/}
        </Container>
    </div>
  );
}

export default App;
