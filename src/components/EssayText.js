import React, { Component } from "react";
import Button from './Button';
import { FIELD_NAMES } from "../constants";
import { getTextTemplates } from "../helpers";
// import PropTypes from "prop-types";

require("./EssayText.scss");

function Text(data) {
    let sentence;
    switch (data.fieldname) {
        case FIELD_NAMES.hometown: 
            sentence = `${getTextTemplates(FIELD_NAMES.hometown)[6]}`;
            break;
        case FIELD_NAMES.favoriteFood: 
            sentence = `${getTextTemplates(FIELD_NAMES.favoriteFood)[0]}`;
            break;
        case FIELD_NAMES.loveToDo: 
            sentence = `${getTextTemplates(FIELD_NAMES.loveToDo)[3]}`;
            break;
        case FIELD_NAMES.messageIf: 
            sentence = `${getTextTemplates(FIELD_NAMES.messageIf)[3]}`;
            break;
            
        
    }

    return (
        data.answer ? <span>{sentence} <b>{data.answer}</b>. </span> : null
    );
}

function EssayText(data) {
    let showButton = true;
    return (
        <div className="essay-text">
            <div>
                <h1>Your essay text</h1>
                <Text fieldname='hometown' answer={data.fieldAnswers.hometown}/>
                <Text fieldname='favoriteFood' answer={data.fieldAnswers.favoriteFood}/>
                <Text fieldname='loveToDo' answer={data.fieldAnswers.loveToDo}/>
                <Text fieldname='messageIf' answer={data.fieldAnswers.messageIf}/>
                <div>{showButton ? <Button text="Edit"/> : null}</div>
            </div>
        </div>
    )
}

export default EssayText;