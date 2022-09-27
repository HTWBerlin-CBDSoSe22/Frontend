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
        <div style={{margin: "90px 20px 20px 20px", padding: "30px", paddingLeft: "90px", paddingRight: "90px", backgroundColor: "#F6FFE4", border: "solid 3px black", borderRadius: "30px"}}>
            <ReactKeycloakProvider authClient={keycloak}
                                   initOptions={initOptions}
            >
                <CustomNavBar/>
            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
