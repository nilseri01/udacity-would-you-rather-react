import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/shared';
import AnsweredQuestion from './AnsweredQuestion';
import NotFoundPage from './NotFoundPage';
class AnswerQuestion extends Component {
  state = {
    answer: 'optionOne',
    answered: false
  };

  handleChange = (e) => {
    const answer = e.target.value;

    this.setState(() => ({
      answer: answer
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { answer } = this.state;
    const { authedUser, question, dispatch } = this.props;

    dispatch(
      handleSaveQuestionAnswer({
        authedUser: authedUser.id,
        qid: question.id,
        answer: answer
      })
    );

    this.setState(() => ({
      answered: true
    }));
  };

  render() {
    const { alreadyAnswered, question, user } = this.props;
    const { answered } = this.state;

    if (!question) {
      return <NotFoundPage />;
    }

    if (alreadyAnswered === true || answered === true) {
      return <AnsweredQuestion />;
    }

    return (
      <div className="card answer-card">
        <div className="card-container">
          <img
            className="avatar"
            src={user.avatarURL}
            alt={`Avatar of ${user.name}`}
          />
          <div>{user.name} asks:</div>
        </div>
        <div className="card-container question-text text-wrap">
          <span className="answer-header">
            <b>Would You Rather...</b>
          </span>
          <form className="answer-form" onSubmit={this.handleSubmit}>
            <div className="question-radio">
              <input
                type="radio"
                name="radio-group"
                value="optionOne"
                defaultChecked
                onChange={this.handleChange}
              />
              <span className="question-option">{question.optionOne.text}</span>
            </div>
            <div className="question-radio">
              <input
                type="radio"
                name="radio-group"
                value="optionTwo"
                onChange={this.handleChange}
              />
              <span className="question-option">{question.optionTwo.text}</span>
            </div>
            <div className="card-container answer-button-container">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { question_id } = props.match.params;

  return {
    authedUser,
    question: questions[question_id],
    user: questions[question_id] ? users[questions[question_id].author] : '',
    alreadyAnswered: users[authedUser.id].answers[question_id] ? true : false
  };
}

export default connect(mapStateToProps)(AnswerQuestion);
