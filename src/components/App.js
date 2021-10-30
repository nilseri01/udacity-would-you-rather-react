import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { LoadingBar } from 'react-redux-loading';
import Navigation from './Navigation';
import Tabs from './Tabs';
import LeaderBoard from './LeaderBoard';
import AnswerQuestion from './AnswerQuestion';
import AddQuestion from './AddQuestion';
import Login from './Login';
import NotFoundPage from './NotFoundPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.loggedIn === true && <Navigation />}
            {this.props.loggedIn === false ? (
              this.props.loading === true ? null : (
                <Login />
              )
            ) : (
              <div>
                <Switch>
                  <Route path="/" exact component={Tabs} />
                  <Route path="/add" component={AddQuestion} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route
                    path="/questions/:question_id"
                    component={AnswerQuestion}
                  />
                  <Route path="/404" component={NotFoundPage} />
                  <Route path="*">
                    <NotFoundPage />
                  </Route>
                </Switch>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loggedIn: !!authedUser,
    loading: !users || Object.keys(users).length === 0
  };
}

export default connect(mapStateToProps)(App);
