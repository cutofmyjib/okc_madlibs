import React, { Component } from "react";
import { editEssay } from "../madlibs";
import { connect } from "react-redux";

require("./Button.scss");

const Button = ({handleClick, mode}) =>{
    return (
        <button onClick={handleClick}>{mode}</button>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => { 
            ownProps.mode === 'Edit' 
                ? dispatch(editEssay({isEditMode: true}))
                : dispatch(editEssay({isEditMode: false}))
        }
  }
}

export default connect(null, mapDispatchToProps)(Button);
