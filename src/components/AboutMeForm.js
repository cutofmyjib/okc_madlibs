import React, { Component } from "react";
import { FIELD_NAMES, COPY } from "../constants";
import Input from './Input';

// import PropTypes from "prop-types";

require("./AboutMeForm.scss");

class AboutMeForm extends Component {

    render() {
        return (
            <form className="about-me-form">
                <label className="form-label">
                    { COPY[FIELD_NAMES.hometown] }
                </label>
                <Input fieldId={FIELD_NAMES.hometown}/>
                
                <label className="form-label">
                    { COPY[FIELD_NAMES.favoriteFood] }
                </label>
                <Input fieldId={FIELD_NAMES.favoriteFood}/>

                <label className="form-label">
                    { COPY[FIELD_NAMES.loveToDo] }
                </label>
                <Input fieldId={FIELD_NAMES.loveToDo}/>

                <label className="form-label">
                    { COPY[FIELD_NAMES.messageIf] }
                </label>
                <Input fieldId={FIELD_NAMES.messageIf}/>
            </form>
        )
    }
    
}

export default AboutMeForm;