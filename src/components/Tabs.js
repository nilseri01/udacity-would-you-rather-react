import React, { Component } from 'react';
import UnansweredQuestionsTab from './UnansweredQuestionsTab';
import AnsweredQuestionsTab from './AnsweredQuestionsTab';

// tabs styling from https://blog.logrocket.com/how-to-build-tab-component-react/

class Tabs extends Component {
  state = { activeTab: 'unanswered' };

  //  Functions to handle Tab Switching
  handleSelectedTab = (selection) => {
    if (this.state.activeTab !== selection) {
      this.setState(() => ({ activeTab: selection }));
    }
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className="tabs">
        <ul className="tab-nav">
          <li
            className={activeTab === 'unanswered' ? 'active' : ''}
            onClick={() => this.handleSelectedTab('unanswered')}
          >
            Unanswered Questions
          </li>
          <li
            className={activeTab === 'answered' ? 'active' : ''}
            onClick={() => this.handleSelectedTab('answered')}
          >
            Answered Questions
          </li>
        </ul>
        <div className="outlet">
          {activeTab === 'answered' ? (
            <AnsweredQuestionsTab />
          ) : (
            <UnansweredQuestionsTab />
          )}
        </div>
      </div>
    );
  }
}

export default Tabs;
