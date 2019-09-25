import React, { Component } from "react";
import { FIELD_NAMES } from "../constants";
import { getTextTemplates } from "../helpers";

require("./EssayText.scss");

function Text(data) {
    let string;
    switch (data.fieldname) {
        case FIELD_NAMES.hometown: 
            string = `${getTextTemplates(FIELD_NAMES.hometown)[6]}`;
            break;
        case FIELD_NAMES.favoriteFood: 
            string = `${getTextTemplates(FIELD_NAMES.favoriteFood)[0]}`;
            break;
        case FIELD_NAMES.loveToDo: 
            string = `${getTextTemplates(FIELD_NAMES.loveToDo)[3]}`;
            break;
        case FIELD_NAMES.messageIf: 
            string = `${getTextTemplates(FIELD_NAMES.messageIf)[3]}`;
            break;
    }

    const [before, after] = string.split("$answer");

    return (
        data.answer ? <span>{before} <strong>{data.answer}</strong>{after} </span> : null
    );
}

function EssayText({fieldAnswers}) {
    
    return (
        <div className="content">
            <Text fieldname='hometown' answer={fieldAnswers.hometown}/>
            <Text fieldname='favoriteFood' answer={fieldAnswers.favoriteFood}/>
            <Text fieldname='loveToDo' answer={fieldAnswers.loveToDo}/>
            <Text fieldname='messageIf' answer={fieldAnswers.messageIf}/>
        </div>
    )
}

export default EssayText;