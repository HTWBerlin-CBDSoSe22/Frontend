import React from 'react';
import '../css/App.css';
import CustomNavBar from '../components/CustomNavBar';
import keycloak from "../Keycloak"
import {ReactKeycloakProvider} from "@react-keycloak/web";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <CustomNavBar/>
            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
