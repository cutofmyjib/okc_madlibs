import React from "react";
import EssayText from './EssayText';
import { connect } from "react-redux";

require("./EssayTextarea.scss");

const EssayTextarea = ({fieldAnswers}) => {
    console.log(fieldAnswers);
    return (
        <div className="essay-textarea">
            <EssayText fieldAnswers={fieldAnswers} buttonMode='Submit' />
        </div>
    )
}

export default EssayTextarea;