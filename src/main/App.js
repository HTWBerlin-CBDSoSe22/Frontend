import React from 'react';
import '../css/App.css';
import NavBar from '../components/NavBar';
import keycloak from "../Keycloak"
import {ReactKeycloakProvider} from "@react-keycloak/web";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <NavBar/>
            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
