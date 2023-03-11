import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div  className="container">
            <div className="innerBox">
                <h1>
                    <Link to="/signin" id="home-link">SIGN IN</Link>
                </h1>

                <br />
                
                <h1>
                    <Link to="/signup" id="home-link">SIGN UP</Link>
                </h1>

                <br />
                <br />
                <br />

                <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
            </div>
            
        </div>
    );
}

export default Home;
