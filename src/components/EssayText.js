import React, { Component } from "react";
import Button from './Button';
import { FIELD_NAMES } from "../constants";
import { getTextTemplates } from "../helpers";
// import PropTypes from "prop-types";

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

function EssayText(data) {
    let showButton = false;
    const fieldAnswers = data.fieldAnswers;
    let fieldAnswersArr = [];
    
    for (let key in fieldAnswers) {
        console.log(fieldAnswers[key]);
        if (fieldAnswers[key].trim() !== '') {
            fieldAnswersArr.push(fieldAnswers[key].trim());
        }
    }

    showButton = fieldAnswersArr.length === 4 ? true : false;

    return (
        <div className="essay-text">
            <div>
                <h1>Your essay text</h1>
                <div className="content">
                    <Text fieldname='hometown' answer={fieldAnswers.hometown}/>
                    <Text fieldname='favoriteFood' answer={fieldAnswers.favoriteFood}/>
                    <Text fieldname='loveToDo' answer={fieldAnswers.loveToDo}/>
                    <Text fieldname='messageIf' answer={fieldAnswers.messageIf}/>
                </div>
                {showButton ? <Button text="Edit"/> : null}
            </div>
        </div>
    )
}

export default EssayText;