import React from 'react';
import CustomNavBar from '../components/CustomNavBar';
import keycloak from "../Keycloak"
import {ReactKeycloakProvider} from "@react-keycloak/web";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const initOptions = {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    };
    return (
        <div className="div-app">
            <ReactKeycloakProvider authClient={keycloak}
                                   initOptions={initOptions}
            >
                <CustomNavBar/>
            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
