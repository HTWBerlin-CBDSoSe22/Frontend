import React from 'react';
import '../css/App.css';
import NavBar from '../components/NavBar';
import GetSomeDate from "../fetch-data/GetSomeDate";
import axios, {Axios} from "axios";
import FetchApiData from "../fetch-data/FetchApiData";
import ShowComponentsDetails from "../fetch-data/ShowComponentsDetails";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import PageComponents from "../pages/PageComponents";
import Login from "../pages/Login.js";
import NoMatch from "../pages/NoMatch";


const api = axios.create({
    baseURL: 'http://localhost:3000/pageComponents'
})

function App() {
  return (
    <div>

        {/*<Login/>*/}
        {/*<TestTable/>*/}


      {/*<h1 className="title">COMPONENTS</h1>*/}



        <NavBar />

        {/*<GetSomeDate />*/}
        {/*<FetchApiData />*/}
        {/*<ShowComponentsDetails />*/}
        {/*<PageComponents/>*/}

    </div>
  );
}

export default App;
