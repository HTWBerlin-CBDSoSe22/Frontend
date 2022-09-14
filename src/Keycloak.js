import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "KBESoSe22",
    clientId: "React-auth",
});

export default keycloak