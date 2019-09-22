import React, { Component } from "react";
import Button from './Button';
// import PropTypes from "prop-types";

require("./EssayText.scss");

function EssayText(props) {

    return (
        <div className="essay-text">
            <div>
                <h1>Your Essay Text</h1>
                <p>{props.text}</p>
                {props.showButton ? <Button /> : null}
            </div>
        </div>
    )
}

export default EssayText;