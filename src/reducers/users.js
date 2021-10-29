import {
  RECEIVE_USERS,
  SAVE_QUESTION_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_QUESTION_ANSWER_TO_USER:
      const { qid, authedUser, answer } = action;

      if (answer !== '') {
        return {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer
            }
          }
        };
      } else {
        // cannot be saved so rollback
        const filteredAnswers = Object.keys(state[authedUser].answers).filter(
          (questionId) => questionId !== qid
        );

        return {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: filteredAnswers
          }
        };
      }
    case ADD_QUESTION_TO_USER:
      const { question } = action;

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      };
    default:
      return state;
  }
}
