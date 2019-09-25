import React, { Component } from "react";
import Button from './Button';
import { FIELD_NAMES } from "../constants";
import { getTextTemplates } from "../helpers";

require("./EssayText.scss");

function Text(data) {
    let string;
    const getRandom = length => {
        return Math.floor(Math.random() * length);
    };

    switch (data.fieldname) {
        case FIELD_NAMES.hometown: 
            console.log("8888888")
            const selectionCount = getTextTemplates(FIELD_NAMES.hometown).length;
            const randomFieldNum = getRandom(selectionCount);
            string = `${getTextTemplates(FIELD_NAMES.hometown)[randomFieldNum]}`;
            console.log(string)
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

function EssayText({fieldAnswers, buttonMode}) {
    const fieldAnswersArr = Object.keys(fieldAnswers);
    const showButton = fieldAnswersArr.length === 4 && fieldAnswersArr.every(key => fieldAnswers[key].trim());

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
                { showButton && (buttonMode === 'Edit'
                    ? <Button mode="Edit"/>
                    : <Button mode="Start Over"/>) }
            </div>
        </div>
    )
}

export default EssayText;