import React, { Component } from "react";
import { submitField } from "../madlibs";
import { connect } from "react-redux";

const Input = ({handleChange, fieldId}) => (
    <input 
        className="form-input" 
        type="text"
        onChange={(event) => handleChange(event.target.value, fieldId)} />
);
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChange: (event) => {
      dispatch(submitField({answer: event, id: ownProps.fieldId}))
    }
  }
}

export default connect(null, mapDispatchToProps)(Input);