import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';

class AddQuestion extends Component {
  state = {
    inputs: {},
    saved: false
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState((prevState) => ({
      inputs: { ...prevState.inputs, [name]: value }
    }));

    this.setState(() => ({
      showingBooks: [],
      isLoading: false,
      noResultsFound: false
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { inputs } = this.state;
    const { dispatch } = this.props;

    dispatch(handleSaveQuestion(inputs));

    this.setState(() => ({
      saved: true
    }));
  };

  render() {
    const { inputs, saved } = this.state;

    if (saved === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="card question-card">
        <div className="avatar-container margin-auto">
          <img
            className="avatar new-question-avatar"
            src="https://cdn2.iconfinder.com/data/icons/medical-icons-110/512/medical_icon_5-1024.png"
            alt="Add new question"
          />
          <div className="new-question-text">
            <h3>Create New Question</h3>
          </div>
        </div>
        <div className="options-container text-wrap margin-auto">
          <span>Complete the question:</span>
          <span className="answer-header">
            <h2>Would You Rather...</h2>
          </span>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="optionOne"
                placeholder="Option One"
                required
                maxLength={300}
                defaultValue={inputs.optionOne || ''}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <span>OR</span>
            </div>
            <div>
              <input
                type="text"
                name="optionTwo"
                placeholder="Option Two"
                required
                maxLength={300}
                defaultValue={inputs.optionTwo || ''}
                onChange={this.handleChange}
              />
            </div>
            <div className="card-container answer-button-container">
              <button
                className={
                  (inputs.optionOne || '').trim().length === 0 ||
                  (inputs.optionTwo || '').trim().length === 0
                    ? 'disabled'
                    : ''
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(AddQuestion);
