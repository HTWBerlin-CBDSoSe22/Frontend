import React from "react";

function PageWelcome() {
    return (
        <div>
            <h1>Welcome to this website!</h1>
            <img variant="top" src={require("../assets/fruits_welcome_banner.jpg")}/>
            <p>Login to get full access to all the functionalities.</p>
            <p>You will be able to view all components and products and more! Login and check it out
                yourself.</p>
            <p><strong>Happy exploring!</strong></p>
        </div>
    );
}

export default PageWelcome;
