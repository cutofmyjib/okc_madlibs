import React, { Component } from "react";
import PropTypes from 'prop-types';
import { submitField } from "../madlibs";
import { connect } from "react-redux";

const Input = ({handleChange, fieldId}) => (

    <input 
        className="form-input" 
        type="text"
        onChange={(event) => handleChange(event.target.value, fieldId)} />
);

Input.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string,
};

function mapStateToProps(state) {
    return state;
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChange: (event) => {
      dispatch(submitField({answer: event, id: ownProps.fieldId}))
    }
  }
}

export default connect(null, mapDispatchToProps)(Input);