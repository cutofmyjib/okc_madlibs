import React, { Component } from "react";
import PropTypes from "prop-types";
import AboutMe from './AboutMe';
import EssayText from './EssayText';
import EssayTextarea from './EssayTextarea';
import Button from './Button';
import { connect } from "react-redux";


require("./App.scss");

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };

  render() {
    let buttonMode = this.props.showTextarea ? 'Start Over' : 'Edit';
    return (
      this.props.showTextarea 
        ? <div className="app-container">
            <div className="essay-textarea">
              <div>
                <h1>Your essay text</h1>
                <EssayTextarea fieldAnswers={this.props.fieldAnswers} />
                <Button mode={buttonMode} />
              </div>
            </div>
          </div>
        : <div className="app-container">
            <AboutMe />
            <div className="essay-text">
              <h1>Your essay text</h1>
              <EssayText fieldAnswers={this.props.fieldAnswers} />
              { this.props.showButton ? <Button mode={buttonMode}/> : null }
            </div>
          </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
