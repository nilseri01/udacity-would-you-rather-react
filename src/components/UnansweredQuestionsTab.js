import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class UnansweredQuestionsTab extends Component {
  render() {
    const { unansweredQuestions } = this.props;

    return (
      <div>
        <ul>
          {unansweredQuestions &&
            unansweredQuestions.map((questionInfo) => (
              <li key={questionInfo.question.id}>
                <Question questionInfo={questionInfo} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredQuestionsIdList = Object.keys(users[authedUser.id].answers);
  const unansweredQuestions = questions
    ? Object.keys(questions)
        .filter(
          (questionId) =>
            answeredQuestionsIdList.indexOf(questions[questionId].id) === -1
        )
        .map((questionId) => ({
          question: questions[questionId],
          user: users[questions[questionId].author]
        }))
    : [];

  return {
    unansweredQuestions: unansweredQuestions.sort(
      (a, b) => b.question.timestamp - a.question.timestamp
    )
  };
}

export default connect(mapStateToProps)(UnansweredQuestionsTab);
