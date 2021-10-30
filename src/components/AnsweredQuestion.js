import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AnsweredQuestion extends Component {
  render() {
    const {
      question,
      user,
      authedUserAnswer,
      authedUserAnswerCount,
      otherAnswerCount
    } = this.props;

    const authedUserAnswerPercentage =
      (authedUserAnswerCount / (authedUserAnswerCount + otherAnswerCount)) *
      100;
    const otherAnswerPercentage =
      (otherAnswerCount / (authedUserAnswerCount + otherAnswerCount)) * 100;

    // progress bar from https://www.florin-pop.com/blog/2019/06/how-to-create-a-custom-progress-bar/

    return (
      <div className="card answer-card">
        <table className="creator-user-table">
          <tbody>
            <tr>
              <td>
                <img
                  className="avatar"
                  src={user.avatarURL}
                  alt={`Avatar of ${user.name}`}
                />
              </td>
            </tr>
            <tr>
              <td className="text-wrap">Added by {user.name}</td>
            </tr>
          </tbody>
        </table>
        <div className="card-container question-text text-wrap">
          <div className="result-header">
            <b>Results:</b>
          </div>
          <div className="answer-header selected-answer">
            {authedUserAnswer === 'optionOne'
              ? question.optionOne.text
              : question.optionTwo.text}
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${authedUserAnswerPercentage * 5}px` }}
              />
            </div>
            <span>
              <b>{authedUserAnswerPercentage}%</b> - {authedUserAnswerCount} out
              of {authedUserAnswerCount + otherAnswerCount} votes
            </span>
          </div>
          <div className="answer-header">
            {authedUserAnswer === 'optionOne'
              ? question.optionTwo.text
              : question.optionOne.text}
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${otherAnswerPercentage * 5}px` }}
              />
            </div>
            <div className="percentage"></div>
            <span>
              <b>{otherAnswerPercentage}%</b> - {otherAnswerCount} out of{' '}
              {authedUserAnswerCount + otherAnswerCount} votes
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { question_id } = props.match.params;

  const authedUserAnswer =
    questions[question_id].optionOne.votes.indexOf(authedUser.id) !== -1
      ? 'optionOne'
      : 'optionTwo';

  return {
    question: questions[question_id],
    user: users[questions[question_id].author],
    authedUserAnswer: authedUserAnswer,
    authedUserAnswerCount:
      questions[question_id][authedUserAnswer].votes.length,
    otherAnswerCount:
      questions[question_id][
        authedUserAnswer === 'optionOne' ? 'optionTwo' : 'optionOne'
      ].votes.length
  };
}

export default withRouter(connect(mapStateToProps)(AnsweredQuestion));
