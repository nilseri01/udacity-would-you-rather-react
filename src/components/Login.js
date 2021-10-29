import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  handleChange = (user) => {
    const userInfo = {
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL
    };

    this.props.dispatch(setAuthedUser(userInfo));
  };

  render() {
    const { authedUser, users } = this.props;

    if (authedUser) {
      return <Redirect to="/" />;
    }

    return (
      <div className="card welcome-container">
        <div className="welcome-header">
          <h2>Welcome to the Would You Rather App!</h2>
        </div>
        <div className="card-container">
          <div className="user-login-container">
            <b>Please select a user to continue...</b>
          </div>
          <div className="question-card">
            <div>
              <img
                className="avatar"
                alt="Select user"
                src="https://cdn.lowgif.com/full/3e5aca3a3a7b4bf3-.gif"
              />
            </div>
            <div className="user-login-container select-container">
              <ul className="user-select">
                <li>
                  Select User
                  <ul className="dropdown" aria-label="submenu">
                    {users &&
                      Object.keys(users).map((userId) => (
                        <li
                          key={userId}
                          onClick={() => this.handleChange(users[userId])}
                        >
                          <img
                            className="avatar"
                            src={users[userId].avatarURL}
                            alt={`Avatar of ${users[userId].name}`}
                          />{' '}
                          <br />
                          <span>{users[userId].name}</span>
                        </li>
                      ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  };
}

export default connect(mapStateToProps)(Login);
