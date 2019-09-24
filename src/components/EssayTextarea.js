import React from "react";
import EssayText from './EssayText';

require("./EssayTextarea.scss");

const EssayTextarea = ({fieldAnswers}) => {
    return (
        <div className="essay-textarea">
            <EssayText fieldAnswers={fieldAnswers} buttonMode='Submit' />
        </div>
    )
}

export default EssayTextarea;