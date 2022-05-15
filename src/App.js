import React from 'react';
import './App.css';
import NavBar from './NavBar';

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


function App() {
  return (
    <div>

        {/*<Login/>*/}
        {/*<TestTable/>*/}


      {/*<h1 className="title">COMPONENTS</h1>*/}



        <NavBar />
        {/*<PageComponents/>*/}

    </div>
  );
}

export default App;
