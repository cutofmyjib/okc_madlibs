import React, { Component } from "react";
import { FIELD_NAMES, COPY, FIELDS } from "../constants";
// import PropTypes from "prop-types";

require("./AboutMeForm.scss");

class AboutMeForm extends Component {

    render() {
        return (
            <form className="about-me-form">
                <label className="form-label">
                    { COPY[FIELD_NAMES.hometown] }
                </label>
                <input className="form-input" type="text" />
            </form>
        )
    }
    
}

export default AboutMeForm;