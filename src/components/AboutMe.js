import React, { Component } from "react";
import AboutMeForm from './AboutMeForm';
// import PropTypes from "prop-types";

require("./AboutMe.scss");

class AboutMe extends Component {

    render() {
        return (
            <div className="about-me-container">
                <h1>About Me</h1>
                <AboutMeForm />
            </div>
        )
    }
    
}

export default AboutMe;