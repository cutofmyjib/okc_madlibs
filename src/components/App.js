import React, { Component } from "react";
import PropTypes from "prop-types";
import AboutMe from './AboutMe';
import EssayText from './EssayText';
import { connect } from "react-redux";
// import { increment } from "../madlibs";

require("./App.scss");

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className="app-container">
        <AboutMe />
        <EssayText />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
