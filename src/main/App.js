import React from 'react';
import '../css/App.css';
import CustomNavBar from '../components/CustomNavBar';
import keycloak from "../Keycloak"
import {ReactKeycloakProvider} from "@react-keycloak/web";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div style={{margin: "90px 20px 20px 20px", padding: "30px", paddingLeft: "90px", paddingRight: "90px", backgroundColor:"cornflowerblue", border: "solid 3px black", borderRadius: "30px"}}>
            <ReactKeycloakProvider authClient={keycloak}>
                <CustomNavBar/>
            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
