import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Question extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const { questionInfo } = this.props;
    const { question, user } = questionInfo;

    return (
      <div className="card question-card">
        <div className="avatar-container">
          <img
            className="avatar"
            src={user.avatarURL}
            alt={`Avatar of ${user.name}`}
          />
        </div>
        <div className="card-container question-container">
          <i>{user.name} asks:</i>
        </div>
        <div className="card-container question-container question-text text-wrap">
          <h4>
            <b>Would you rather</b>
          </h4>
          <div className="text-wrap">{question.optionOne.text}</div>
        </div>
        <div className="card-container button-container">
          <button onClick={() => this.nextPath(`/questions/${question.id}`)}>
            View Poll
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Question);
