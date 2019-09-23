import React, { Component } from "react";

require("./Button.scss");

function Button(props) {
    return (
        <button>{props.text}</button>
    );
}

export default Button;