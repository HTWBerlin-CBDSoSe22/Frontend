import React, {Component} from "react";
// import fruits_banner from "./src/assets";

class PageWelcome extends Component{
    render() {
        return (
            // style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2015/12/30/11/57/fruits-1114060_1280.jpg)`, opacity: ".2"}}
            <React.Fragment>
                <div>
                    <h1>Welcome to this website!</h1>
                    <img variant="top" src={require("../assets/fruits_welcome_banner.jpg")}/>
                    <p>Login to get full access to all the functionalities.</p>
                    <p>You will be able to view all components and products and more! Login and check it out
                        yourself.</p>
                    <p><strong>Happy exploring!</strong></p>
                </div>
            </React.Fragment>
        );
    }
}

export default PageWelcome;
