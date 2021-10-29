import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api';
import {
  receiveUsers,
  addQuestionAnswerToUser,
  addQuestionToUser
} from './users';
import {
  receiveQuestions,
  addQuestionAnswerToQuestion,
  addQuestion
} from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleSaveQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(addQuestionAnswerToQuestion(info));
    dispatch(addQuestionAnswerToUser(info));

    return saveQuestionAnswer(info).catch((e) => {
      console.warn('Error in handleSaveQuestionAnswer: ', e);
      dispatch(addQuestionAnswerToQuestion({ ...info, answer: '' }));
      dispatch(addQuestionAnswerToUser({ ...info, answer: '' }));
      alert('There was an error saving the answer. Try again.');
    });
  };
}

export function handleSaveQuestion(options) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      author: authedUser.id,
      optionOneText: options.optionOne,
      optionTwoText: options.optionTwo
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}
