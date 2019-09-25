import React from "react";
import EssayText from './EssayText';

require("./EssayTextarea.scss");

const EssayTextarea = ({fieldAnswers}) => {
    return (
        <EssayText fieldAnswers={fieldAnswers} />
    )
}

export default EssayTextarea;