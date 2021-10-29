import React from 'react';

// card styling from: https://www.w3schools.com/howto/howto_css_cards.asp

const LeaderBoardUser = (props) => {
  const userInfo = props.userInfo;

  return (
    <div className="card">
      <div className="avatar-container leader-container">
        <img
          className="avatar"
          src={userInfo.avatarURL}
          alt={`Avatar of ${userInfo.name}`}
        />
      </div>
      <div className="card-container">
        <h4>
          <b>{userInfo.name}</b>
        </h4>
        <p>Answered Questions: {userInfo.answeredQuestionsCount}</p>
        <p>Created Questions: {userInfo.createdQuestionsCount}</p>
        <p>Score: {userInfo.totalQuestionsCount}</p>
      </div>
    </div>
  );
};

export default LeaderBoardUser;
