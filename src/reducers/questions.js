import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER_TO_QUESTION
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case SAVE_QUESTION_ANSWER_TO_QUESTION:
      const { qid, authedUser, answer } = action;

      if (answer !== '') {
        return {
          ...state,
          [qid]: {
            ...state[qid],
            [answer]: {
              ...state[qid][answer],
              votes: state[qid][answer].votes.concat(authedUser)
            }
          }
        };
      } else {
        // cannot be saved so rollback
        return {
          ...state,
          [qid]: {
            ...state[qid],
            [answer]: {
              ...state[qid][answer],
              votes: state[qid][answer].votes.filter(
                (user) => user !== authedUser
              )
            }
          }
        };
      }
    default:
      return state;
  }
}
