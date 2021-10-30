import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authedUser';

class Navigation extends Component {
  handleLogout = () => {
    this.props.dispatch(logout());
    this.props.history.push('/');
  };

  render() {
    const { authedUser } = this.props;

    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          <li className="auth-user-info margin-left-auto">
            <div className="greeting-text">Hello {authedUser.name}</div>
            <img
              src={authedUser.avatarURL}
              alt={`Avatar of ${authedUser.id}`}
              className="auth-user-avatar"
            ></img>
          </li>
          <li className="logout-menu">
            <button onClick={this.handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  };
}

export default withRouter(connect(mapStateToProps)(Navigation));
