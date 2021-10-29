import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoardUser from './LeaderBoardUser';

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        {this.props.userInfoList.map((userInfo) => (
          <LeaderBoardUser key={userInfo.id} userInfo={userInfo} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const userInfoList = [];
  Object.keys(users).forEach((userId) => {
    let userInfo = {
      id: userId,
      name: users[userId].name,
      avatarURL: users[userId].avatarURL,
      answeredQuestionsCount: users[userId].answers
        ? Object.keys(users[userId].answers).length
        : 0,
      createdQuestionsCount: users[userId].questions
        ? users[userId].questions.length
        : 0
    };
    userInfo = {
      ...userInfo,
      totalQuestionsCount:
        userInfo.answeredQuestionsCount + userInfo.createdQuestionsCount
    };
    userInfoList.push(userInfo);
  });

  return {
    userInfoList: userInfoList.sort(
      (a, b) => b.totalQuestionsCount - a.totalQuestionsCount
    )
  };
}

export default connect(mapStateToProps)(LeaderBoard);
